import axios from "axios";
import iconNotification from "../../assets/img/notification-icon.svg";
import { BASE_URL } from "../../utils/request";

import "./styles.css";

type Props = {
  saleId: number;
};

function handleClick(id: number) {
  axios(`${BASE_URL}/sales/${id}/notification`).then((response) => {
    console.log("GO");
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
