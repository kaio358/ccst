import styles from "./LiMensagem.module.css"

function LiMensagem(props) {
    return(
        <li className={styles.message_c} style={props.estilo}>
            <div className={styles.para}>
                <span >{props.para}</span>
            </div>
            <div className={styles.texto}>
                <span>{props.texto} </span>
            </div>
            <div className={styles.data}>
                <span>{props.data}</span>
            </div>
            <div className={ ` ${styles.classificacao_message} ${styles[props.customCor]}` }>

            </div>
        </li>
    )
}
export default LiMensagem