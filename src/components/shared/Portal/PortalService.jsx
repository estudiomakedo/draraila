export function OpenModal(identifier) {
    const portal = typeof document !== `undefined` ? document.getElementById(identifier) : null;
    if(portal){
        portal.style.display = 'flex';
 
    }
}
