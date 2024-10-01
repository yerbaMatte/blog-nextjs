import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer_layout}>
        <p>All Rights Reserved 2024 ®Miłosz Lewandowski</p>
        <p>Hosts on Homelab Proxmox VPS. </p>
      </div>
    </footer>
  );
}
