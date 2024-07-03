import { MacAddressPlugin } from '@alexisayala&#x2F;capacitor-mac-address';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    MacAddressPlugin.echo({ value: inputValue })
}
