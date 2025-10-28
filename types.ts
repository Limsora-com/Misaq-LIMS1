import { FieldValue, Timestamp } from 'firebase/firestore';

// Utility Types
export type FirestoreTimestamp = Timestamp | FieldValue | Date;

// Daily Activity Report
export interface Sample {
  id: string;
  registrationDate: FirestoreTimestamp;
  productName: string;
  batchNumber: string;
  stage: string;
  activity: string;
  remarks: string;
  status: 'Pending' | 'Testing in Progress' | 'Pending Review' | 'Pass' | 'Fail' | 'Resample' | 'Approved';
  performedBy?: string;
  reviewedBy?: string;
  qcNumber?: string;
  batchSize?: number;
  releaseDate?: FirestoreTimestamp;
  testingStartDate?: FirestoreTimestamp;
  analystRemarks?: string;
}

// Sterility Log
export interface SterilityEntry {
  id: string;
  date: string; // DD/MM/YYYY
  productName: string;
  batchNumber: string;
  activity: string;
  endDate?: string; // DD/MM/YYYY
  releaseDate?: string; // DD/MM/YYYY
  sterilityStatus: 'Pass' | 'Fail' | 'In-Progress';
  betStatus: 'Pass' | 'Fail' | 'In-Progress';
  remarks?: string;
}

// Lab Chemical Ledger
export interface ChemicalBatch {
  fb_id: string; // Firebase document ID
  id: number; // Chemical ID (e.g., 101)
  name: string;
  batchNumber: string;
  expiryDate: string; // YYYY-MM-DD
  cas: string;
  quantity: number;
  baseUnit: 'kg' | 'g' | 'L' | 'mL';
  reorderLevel: number;
  location: string;
  status?: 'OK' | 'Low Stock' | 'Out of Stock' | 'Expiring' | 'Expired';
}

export interface ChemicalTransaction {
  id: string;
  date: FirestoreTimestamp;
  chemicalFbId: string; // Reference to ChemicalBatch.fb_id
  chemicalName: string;
  batchNumber: string; // Batch number of the chemical used
  amountUsed: number;
  unit: 'mg' | 'g' | 'mL' | 'L' | 'kg'; // Fix: Added 'kg' to unit options
  testName: string; // Product/Test Name for which chemical was used
  productBatchNumber: string; // Batch number of the product being tested
}

// Label Generator
export type LabelType = 'raw-material' | 'packing-material' | 'finished-product';
export type LabelStatus = 'released' | 'rejected' | 'sampled';

export interface LabelFormData {
  'qc-no'?: string;
  'product-name'?: string;
  'batch-no'?: string;
  'mfg-date'?: string;
  'exp-date'?: string;
  'batch-size'?: string;
  'test-date'?: string; // YYYY-MM-DD
  'release-date'?: string; // YYYY-MM-DD
  'manufacturer'?: string;
  'remarks'?: string;
  'item-name'?: string;
  'total-qty'?: string;
  'batch-lot-no'?: string;
  'receiving-date'?: string; // YYYY-MM-DD
  'supplier'?: string;
  'rm-params-select'?: string[]; // Array of selected parameters
  'fp-params-select'?: string[]; // Array of selected parameters
  dynamicParams?: { [key: string]: string }; // For dynamic test parameters
  // Added properties for SOP numbers which are dynamically assigned
  'sop-approved'?: string;
  'sop-rejected'?: string;
  'sop-sampled'?: string;
}

export interface LabelHistoryEntry {
  id: string; // Firebase document ID
  labelType: LabelType;
  productName: string;
  batchNumber: string;
  createdAt: FirestoreTimestamp;
  fields: LabelFormData; // All form fields
}

export interface TestProfileSubTest {
  name: string;
  limits: string;
  result?: string; // For initial/pull results
}

export interface TestProfileGroup {
  name: string;
  subTests: TestProfileSubTest[];
}

export interface StabilityPullResults {
  values: { name: string; result: string; }[];
  completionDate: string; // DD/MM/YYYY
}

export interface StabilityPullStatus {
  status: 'Pending' | 'In-Progress' | 'Completed';
}

// Stability Suite
export interface StabilityStudy {
  id: string;
  productName: string;
  productType?: 'Injectable' | 'Tablet' | 'Other'; // Made optional for initial empty state
  batchNumber: string;
  packSize: string;
  mfgDate: string; // DD/MM/YYYY
  expDate: string; // DD/MM/YYYY
  startDate: string; // DD/MM/YYYY (Study Start Date)
  initialResultsDate: string; // DD/MM/YYYY
  condition?: 'AT 40°C/75% RH' | 'LT 30°C/65% RH'; // Made optional for initial empty state
  testProfile: TestProfileGroup[]; // Array of test groups with sub-tests and limits
  pullDates: { [interval: string]: string }; // e.g., {'3M': '15/03/2024'}
  pulls: { [interval: string]: StabilityPullStatus }; // e.g., {'3M': {status: 'Completed'}}
  results: { [interval: string]: StabilityPullResults }; // e.g., {'0M': {values: [], completionDate: '...'}, '3M': {values: [], completionDate: '...'}}
}