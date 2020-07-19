module.exports = {
  gifsicle: { optimizationLevel: 2, interlaced: false, colors: 50 },
  mozjpeg: { progressive: true, quality: 30 },
  pngquant: { quality: [0.5, 0.8] },
  svgo: {
    plugins: [{ removeViewBox: false }, { cleanupIDs: true }],
  },
  webp: { quality: 30 },
};
