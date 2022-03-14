export default function Mobile() {
    return (
        <div class="fundo-mobile">
            <Arr/>
        </div>
    )
}

function Arr() {
    const names = ["home","search-outline","add-circle-outline","heart-outline","person-outline"];
    return (names.map(name => <ion-icon class="no-mobile" name={name}></ion-icon>));
}