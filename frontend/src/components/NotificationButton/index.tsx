import axios from "axios";
import { toast } from "react-toastify";
import iconNotification from "../../assets/img/notification-icon.svg";
import { BASE_URL } from "../../utils/request";

import "./styles.css";

type Props = {
  saleId: number;
};

function handleClick(id: number) {
  axios(`${BASE_URL}/sales/${id}/notification`).then((response) => {
    toast.info("SMS enviado com sucesso");
  });
}

export function NotificationButton({ saleId }: Props) {
  return (
    <div
      className="dsmeta-red-btn"
      onClick={() => {
        handleClick(saleId);
      }}
    >
      <img src={iconNotification} alt="Notificar" />
    </div>
  );
}
