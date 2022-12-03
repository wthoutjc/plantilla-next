export interface INotification {
  id: string;
  title: string;
  message: string;
  type: "success" | "error" | "info" | "warning";
  autoDismiss: {
    duration: number;
    dismissable: boolean;
  };
}
