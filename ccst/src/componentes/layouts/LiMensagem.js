import styles from "./LiMensagem.module.css"

function LiMensagem(props) {
    return(
        <li className={styles.message_c} style={props.estilo}>
            <div className={styles.para}>
                <span >{props.para}</span>
            </div>
            <div>
                <span>{props.texto} </span>
            </div>
            <div>
                <span>{props.data}</span>
            </div>
        </li>
    )
}
export default LiMensagem