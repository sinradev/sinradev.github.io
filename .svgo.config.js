module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,            // KEEP viewBox - required for responsive scaling
          convertPathData: {
            precision: 2,                  // Limit to 2 decimal places (balances precision & file size)
            transformPrecision: 2,
          },
          convertTransform: {
            convertToShorts: true,
          },
          removeHiddenElems: true,         // Remove hidden elements
          removeEmptyContainers: true,     // Remove empty groups
          removeEmptyAttrs: true,          // Remove empty attributes
          convertStyleToAttrs: true,       // Inline styles to attributes
          removeComments: true,            // Remove comments
          removeDesc: true,                // Remove <desc> elements (keep alt text instead)
          removeTitle: false,              // KEEP <title> for accessibility
          removeMetadata: true,            // Remove metadata
          removeXMLProcInst: true,         // Remove XML processing instructions
          cleanupIDs: true,                // Clean up IDs
          removeUselessStrokeAndFill: {
            removeNone: true,
            removeCurrentColor: false,     // KEEP currentColor support
          },
        },
      },
    },
  ],
};
