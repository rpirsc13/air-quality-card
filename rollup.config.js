import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';

const BUILD_TIMESTAMP = new Date().toISOString().replace(/[:.T]/g, '-').substring(0, 16);

export default {
  input: 'src/air-quality-card.ts',
  output: {
    file: 'dist/air-quality-card.js',
    format: 'es',
    inlineDynamicImports: true,
    sourcemap: false,
    name: 'AirQualityCard',
    generatedCode: 'es2015',
  },
  plugins: [
    replace({
      __BUILD_TIMESTAMP__: JSON.stringify(BUILD_TIMESTAMP),
      preventAssignment: true,
    }),
    resolve(),
    typescript(),
    terser({
      format: { comments: false },
      mangle: { keep_classnames: true, keep_fnames: true, properties: false },
      compress: { defaults: false, drop_console: false },
    }),
  ],
};
