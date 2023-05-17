export interface DataItem {
    name: string;
    device: string;
    path: string;
    status: string;
}
  
export interface DataTableProps {
    data: DataItem[];
}