const sugestions = [
    { name: 'bad.vibes.memes', reason: 'Segue você' },
    { name: 'chibirdart',  reason: 'Segue você' },
    { name: 'razoesparaacreditar', reason: 'Novo no Instagram' },
    { name: 'adorable_animals', reason: 'Segue você' },
    { name: 'smallcutecats', reason: 'Segue você' },
]

export default function Sidebar() {
    return(
        <div class="sidebar">
            
            <Usuario name="Catana" username="catanacomics"/>

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {sugestions.map(sugestion => <Sugestao name={sugestion.name} reason={sugestion.reason}/>)}
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

function Usuario(props) {
    return(
        <div class="usuario">
                <img src={`assets/img/${props.username}.svg`} />
                <div class="texto">
                <strong>{props.username}</strong>
                {props.name}
                </div>
        </div>
    )
}

function Sugestao(props) {
    return(
        <div class="sugestao">
            <div class="usuario">
                <img src={`assets/img/${props.name}.svg`} />
                <div class="texto">
                <div class="nome">{props.name}</div>
                <div class="razao">{props.reason}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}