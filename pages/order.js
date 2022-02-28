import React, { useEffect, useState } from "react";
import Order from "../src/_pages/order";
import Modal from "../src/components/modal";

function OrderPage() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, []);

  return (
    <div>
      {showModal && <Modal></Modal>}
      <Order></Order>
    </div>
  );
}

export default OrderPage;
