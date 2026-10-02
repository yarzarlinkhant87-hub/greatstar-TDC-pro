import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.greatstar.dtcpro',
  appName: 'GREATSTAR DTC-PRO',
  webDir: 'dist',
  backgroundColor: '#020617',
  server: {
    androidScheme: 'https',
    cleartext: true
  }
};

export default config;
