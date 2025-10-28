
// Replace with your actual Firebase project configuration using environment variables
// Ensure process.env.REACT_APP_FIREBASE_API_KEY, etc. are set in your build environment.
export const FIREBASE_CONFIG = {
  apiKey: process.env.API_KEY || "YOUR_FIREBASE_API_KEY", // CRITICAL: Must be process.env.API_KEY
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "YOUR_AUTH_DOMAIN",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "YOUR_STORAGE_BUCKET",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "YOUR_MESSAGING_SENDER_ID",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "YOUR_APP_ID",
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "YOUR_MEASUREMENT_ID"
};

export const LEDGER_PASSWORD = '12345'; // Hardcoded password from original JS
export const EXPIRY_WARNING_DAYS = 30;

export const DEFAULT_RAW_MATERIAL_SOP = {
  released: "MP/QC/SOP/002/L",
  rejected: "MP/QC/SOP/002/I",
  sampled: "MP/QC/SOP/002/M"
};

export const DEFAULT_PACKING_MATERIAL_SOP = {
  released: "MP/QC/SOP/002/J",
  rejected: "MP/QC/SOP/002/K"
};

export const DEFAULT_FINISHED_PRODUCT_SOP = {
  released: "MP/QC/SOP/002/G",
  rejected: "MP/QC/SOP/002/H"
};

export const MASTER_SCHEDULE_INTERVALS = ['1M', '3M', '6M', '9M', '12M', '18M', '24M', '36M'];
export const HISTORY_INTERVALS = ['0M', '1M', '2M', '3M', '4M', '5M', '6M', '9M', '12M', '18M', '24M', '36M'];

export const DEFAULT_TEST_PROFILES = {
  "Injectable": [
    { name: "Appearance", subTests: [{ name: "Appearance", limits: "Clear, colorless solution" }] },
    { name: "Assay (%)", subTests: [{ name: "Assay (%)", limits: "95.0 - 105.0" }] },
    { name: "pH", subTests: [{ name: "pH", limits: "4.5 - 5.5" }] },
    {
      name: "Particulate Matter",
      subTests: [
        { name: "≥10µm", limits: "Max 6000 particles/container" },
        { name: "≥25µm", limits: "Max 600 particles/container" }
      ]
    }
  ],
  "Tablet": [
    { name: "Appearance", subTests: [{ name: "Appearance", limits: "White, round, biconvex tablet" }] },
    { name: "Assay (%)", subTests: [{ name: "Assay (%)", limits: "98.0 - 102.0" }] },
    { name: "Dissolution (%)", subTests: [{ name: "Dissolution (%)", limits: "NLT 80% in 30 min" }] },
    { name: "Hardness (N)", subTests: [{ name: "Hardness (N)", limits: "50 - 100" }] },
    { name: "Water Content (%)", subTests: [{ name: "Water Content (%)", limits: "NMT 5.0" }] }
  ],
  "Other": []
};
