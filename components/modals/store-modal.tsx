"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../ui/modal";

export const StoreModal = () => {
  const StoreModal = useStoreModal();
  return (
    <Modal
      title="Create store"
      description="Add a new store to manage products and categories"
      isOpen={StoreModal.isOpen}
      onClose={() => StoreModal.onClose}
    >
      Future Create store form
    </Modal>
  );
};
