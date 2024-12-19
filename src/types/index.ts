export interface Project {
  id: string;
  name: string;
  location: string;
  status: 'on-track' | 'delayed' | 'critical';
  completion: number;
  budgetSpent: number;
  totalBudget: number;
  pendingBills: number;
  contractor: string;
}

export interface VendorPaymentStatus {
  amount: number;
  pendingWith: 'Junior Engineer' | 'Site Engineer' | 'Accounts' | 'Management';
  reason: string;
}

export interface Vendor {
  id: string;
  name: string;
  rating: number;
  totalSpend: number;
  pendingPayments: number;
  activeProjects: number;
  paymentStatuses: VendorPaymentStatus[];
}

export interface Bill {
  id: string;
  vendorId: string;
  amount: number;
  status: 'pending' | 'approved' | 'rejected';
  dueDate: string;
  reason?: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  location: string;
  threshold: number;
}