import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'xyz.capacitorioshttp.bug',
  appName: 'capacitor-http-bug',
  webDir: 'dist/reproduce-capacitor-http-bug/browser',
  plugins: {
    CapacitorHttp: {
      enabled: true,
    }
  }
};

export default config;
