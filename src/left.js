export default function Left() {

    const arrayStories = ['9gag', 'meowed', 'barked', 'nathanwpylestrangeplanet', 'wawawicomics', 'respondeai', 'filomoderna', 'memeriagourmet']
    const arrayPosts = [
        {name: 'meowed', conteudoImg: 'gato-telefone', whoLiked: "respondeai", howManyLikes: "outras 101.523 pessoas"},
        {name: 'barked', conteudoImg: 'dog', whoLiked: "adorable_animals", howManyLikes: "outras 99.159 pessoas"},
    ]


    return (
        <div class="esquerda">
            <div class="stories">

                {arrayStories.map(story => <Story name={story}/>)}

                <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>

            <div class="posts">
                {arrayPosts.map(post => <Post name={post.name} conteudoImg={post.conteudoImg} whoLiked={post.whoLiked} howManyLikes={post.howManyLikes}/>)}
            </div>
        </div>
    )
}

function Story(props) {
    return(
        <div class="story">
            <div class="imagem">
                <img src={`assets/img/${props.name}.svg`} />
            </div>
            <div class="usuario">
                {props.name}
            </div>
        </div>
    )
}

function Post(props) {
    return(
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={`assets/img/${props.name}.svg`} />
                    {props.name}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={`assets/img/${props.conteudoImg}.svg`} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={`assets/img/${props.whoLiked}.svg`} />
                    <div class="texto">
                        Curtido por <strong>{props.whoLiked}</strong> e <strong>{props.howManyLikes}</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}