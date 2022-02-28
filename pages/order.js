import React, { useEffect, useState } from "react";
import Order from "../src/_pages/order";
import Modal from "../src/components/modal";
import { motion, AnimatePresence } from "framer-motion";

function OrderPage() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, []);
  return (
    <AnimatePresence>
      <motion.div exit={{ opacity: 1 }} transition={{ duration: 2 }}>
        {showModal && <Modal></Modal>}
        <Order></Order>
      </motion.div>
    </AnimatePresence>
  );
}

export default OrderPage;
