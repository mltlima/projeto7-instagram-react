export default function Header() {
    return(
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div class="separador"></div>
                    <img src="assets/img/logo.png" />
                </div>

                <div class="logo-mobile">
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>

                <div class="instagram-mobile">
                    <img src="assets/img/logo.png" />
                </div>
        
                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>
        
                <div class="icones">
                    <Arr/>
                </div>

                <div class="icones-mobile">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
        </div>
    );
}

function Arr() {
    const names = ["paper-plane-outline","compass-outline","heart-outline","person-outline"];
    return (names.map(name => <ion-icon class="no-mobile" name={name}></ion-icon>));
}