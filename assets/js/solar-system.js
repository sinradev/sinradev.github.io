// Solar System Animation - 3D Canvas Implementation
(function () {
  const canvas = document.getElementById("solar-system-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  // Adjust canvas size
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // 3D to 2D projection with 3/4 perspective
  function project3D(x, y, z) {
    const scale = 400; // Slightly smaller scale to fit in hero section
    const perspective = 800;

    // Rotation angles for 3/4 view
    const angleX = Math.PI / 6; // 30 degrees
    const angleY = Math.PI / 8; // 22.5 degrees

    // Rotation X
    let y1 = y * Math.cos(angleX) - z * Math.sin(angleX);
    let z1 = y * Math.sin(angleX) + z * Math.cos(angleX);

    // Rotation Y
    let x1 = x * Math.cos(angleY) + z1 * Math.sin(angleY);
    let z2 = -x * Math.sin(angleY) + z1 * Math.cos(angleY);

    // Perspective projection - centered in hero
    const factor = perspective / (perspective + z2);

    return {
      x: canvas.width / 2 + x1 * scale * factor,
      y: canvas.height / 2 + y1 * scale * factor,
      scale: factor,
    };
  }

  // Planet configuration
  const planets = [
    {
      radius: 1.0,
      orbitRadius: 0.8,
      speed: 2.0,
      color: "#4db8ff",
      glowColor: "rgba(77, 184, 255, 0.6)",
      size: 16,
      trailColor: "rgba(77, 184, 255, 0.5)",
      trailGlow: "#4db8ff",
    },
    {
      radius: 0.7,
      orbitRadius: 1.2,
      speed: 1.5,
      color: "#cc8844",
      glowColor: "rgba(204, 136, 68, 0.5)",
      size: 12,
      trailColor: "rgba(204, 136, 68, 0.5)",
      trailGlow: "#cc8844",
    },
    {
      radius: 1.3,
      orbitRadius: 1.8,
      speed: 1.1,
      color: "#ffcc66",
      glowColor: "rgba(255, 204, 102, 0.6)",
      size: 24,
      trailColor: "rgba(255, 204, 102, 0.5)",
      trailGlow: "#ffcc66",
    },
    {
      radius: 0.8,
      orbitRadius: 1.4,
      speed: 1.3,
      color: "#ff6666",
      glowColor: "rgba(255, 102, 102, 0.5)",
      size: 14,
      trailColor: "rgba(255, 102, 102, 0.5)",
      trailGlow: "#ff6666",
    },
    {
      radius: 1.5,
      orbitRadius: 2.5,
      speed: 0.7,
      color: "#3399ff",
      glowColor: "rgba(51, 153, 255, 0.6)",
      size: 28,
      trailColor: "rgba(51, 153, 255, 0.5)",
      trailGlow: "#3399ff",
    },
  ];

  const maxTrailLength = 1500; // Much longer trails for helical effect
  let time = 0;

  // Draw a sphere with lighting effect
  function drawSphere(x, y, radius, color, glowColor, scale) {
    const adjustedRadius = radius * scale;

    // Shadow blur
    ctx.shadowBlur = 20 * scale;
    ctx.shadowColor = glowColor;

    // Radial gradient for 3D effect - gradient goes from light color to darker
    const gradient = ctx.createRadialGradient(
      x - adjustedRadius * 0.3,
      y - adjustedRadius * 0.3,
      adjustedRadius * 0.1,
      x,
      y,
      adjustedRadius,
    );
    // Light version of the color (not white)
    const lightColor =
      color.replace("#", "#").length === 7
        ? "rgba(" +
          parseInt(color.substr(1, 2), 16) +
          "," +
          parseInt(color.substr(3, 2), 16) +
          "," +
          parseInt(color.substr(5, 2), 16) +
          ", 0.9)"
        : color;
    gradient.addColorStop(0, lightColor); // Light version of color
    gradient.addColorStop(0.5, color); // Main color
    gradient.addColorStop(1, color.replace("ff", "aa")); // Darker version

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, adjustedRadius, 0, Math.PI * 2);
    ctx.fill();

    ctx.shadowBlur = 0;
  }

  // Draw the sun
  function drawSun(x, y, scale) {
    const radius = 40 * scale;

    // Outer halo
    const haloGradient = ctx.createRadialGradient(
      x,
      y,
      radius * 0.5,
      x,
      y,
      radius * 2.5,
    );
    haloGradient.addColorStop(0, "rgba(255, 215, 0, 0.3)");
    haloGradient.addColorStop(0.5, "rgba(255, 140, 0, 0.2)");
    haloGradient.addColorStop(1, "rgba(255, 140, 0, 0)");

    ctx.fillStyle = haloGradient;
    ctx.beginPath();
    ctx.arc(x, y, radius * 2.5, 0, Math.PI * 2);
    ctx.fill();

    // Main sun
    ctx.shadowBlur = 30 * scale;
    ctx.shadowColor = "#ffd700";

    const sunGradient = ctx.createRadialGradient(
      x - radius * 0.3,
      y - radius * 0.3,
      radius * 0.1,
      x,
      y,
      radius,
    );
    sunGradient.addColorStop(0, "#ffffff");
    sunGradient.addColorStop(0.4, "#ffd700");
    sunGradient.addColorStop(1, "#ff8c00");

    ctx.fillStyle = sunGradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.shadowBlur = 0;
  }

  // Draw planet trails
  function drawTrail(trail, color, baseColor) {
    if (trail.length < 2) return;

    // First pass: wide glow
    ctx.strokeStyle = color;
    ctx.lineWidth = 8;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.shadowBlur = 20;
    ctx.shadowColor = baseColor;

    ctx.beginPath();
    for (let i = 0; i < trail.length; i++) {
      const p = project3D(trail[i].x, trail[i].y, trail[i].z);
      const opacity = 1 - i / trail.length;
      ctx.globalAlpha = opacity * 0.3;

      if (i === 0) {
        ctx.moveTo(p.x, p.y);
      } else {
        ctx.lineTo(p.x, p.y);
      }
    }
    ctx.stroke();

    // Second pass: main line
    ctx.lineWidth = 3;
    ctx.shadowBlur = 10;

    ctx.beginPath();
    for (let i = 0; i < trail.length; i++) {
      const p = project3D(trail[i].x, trail[i].y, trail[i].z);
      const opacity = 1 - i / trail.length;
      ctx.globalAlpha = opacity * 0.7;

      if (i === 0) {
        ctx.moveTo(p.x, p.y);
      } else {
        ctx.lineTo(p.x, p.y);
      }
    }
    ctx.stroke();

    ctx.shadowBlur = 0;
    ctx.globalAlpha = 1;
  }

  // Draw orbital paths
  function drawOrbits() {
    planets.forEach((planet) => {
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.lineWidth = 1;
      ctx.beginPath();

      const numPoints = 100;
      for (let i = 0; i <= numPoints; i++) {
        const angle = (i / numPoints) * Math.PI * 2;
        const x = Math.cos(angle) * planet.orbitRadius;
        const y = Math.sin(angle) * planet.orbitRadius;
        const z = 0;

        const projected = project3D(x, y, z);

        if (i === 0) {
          ctx.moveTo(projected.x, projected.y);
        } else {
          ctx.lineTo(projected.x, projected.y);
        }
      }

      ctx.stroke();
    });
  }

  // Main animation loop
  function animate() {
    // Clear canvas - transparent background
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw orbital paths
    drawOrbits();

    // Sun trail removed

    // Calculate and draw planet trails
    planets.forEach((planet, index) => {
      const angle = time * planet.speed;

      // Create helical trail that follows the same movement as the solar system
      // The Z position increases dramatically to show the helix through space
      const trail = [];
      for (let i = 0; i < maxTrailLength; i++) {
        const t = i / maxTrailLength;
        const pastAngle = angle - t * Math.PI * 16; // Many more rotations for visible helix
        const pastX = Math.cos(pastAngle) * planet.orbitRadius;
        const pastY = Math.sin(pastAngle) * planet.orbitRadius;
        const pastZ = -t * 200; // MUCH deeper Z for dramatic helical effect (30x longer)

        trail.push({ x: pastX, y: pastY, z: pastZ });
      }

      // Draw trail
      drawTrail(trail, planet.trailColor, planet.trailGlow);
    });

    // Draw sun
    const sunPos = project3D(0, 0, 0);
    drawSun(sunPos.x, sunPos.y, sunPos.scale);

    // Draw planets
    planets.forEach((planet, index) => {
      const angle = time * planet.speed;
      const orbitalX = Math.cos(angle) * planet.orbitRadius;
      const orbitalY = Math.sin(angle) * planet.orbitRadius;
      const orbitalZ = 0;

      const projected = project3D(orbitalX, orbitalY, orbitalZ);
      drawSphere(
        projected.x,
        projected.y,
        planet.size,
        planet.color,
        planet.glowColor,
        projected.scale,
      );
    });

    time += 0.01;
    requestAnimationFrame(animate);
  }

  // Start animation
  animate();
})();
