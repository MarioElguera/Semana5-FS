import { useState, useRef } from 'react';

export default function DesplazamientoVertical() {
    const divRef = useRef(null);

    const irAbajo = () => {
        divRef.current.scrollTop = divRef.current.scrollHeight;
    };

    return (
        <div>
            <div
                ref={divRef}
                style={{ height: "100px", width: "400px", overflow: "auto", border: "1px solid black", justifySelf: "center" }}>
                <p>Contenido inicial ...</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis dolor, tristique ac ligula ut, congue pretium risus. Nam aliquet, sem eget elementum iaculis, est orci elementum libero, sollicitudin porttitor felis felis sed justo. Quisque arcu nunc, pretium in molestie nec, porttitor sit amet felis. Nullam quis est suscipit, tristique lorem vel, varius elit. Suspendisse potenti. Nam non lorem libero.
                    Curabitur luctus quam id pellentesque semper. Suspendisse varius pretium ligula, ut tempus massa tempus at. Cras mauris risus, pretium sit amet diam vitae, bibendum fringilla libero.
                    Maecenas euismod cursus faucibus. Proin non ligula nulla. Integer convallis nulla vitae facilisis tincidunt. Maecenas non varius neque. Nulla facilisi. Etiam eleifend sapien vel ultrices malesuada. Phasellus a elit vitae nisl pellentesque cursus commodo non nisl. Aliquam placerat libero ac eros tempor, id consectetur urna accumsan. Duis sem ligula, pulvinar sed vehicula vel, varius non tortor.
                    Praesent molestie efficitur lorem, nec suscipit eros convallis a. Nulla facilisi. Nam lobortis nisl leo, vel placerat orci elementum in. Nullam elementum, sapien at malesuada semper, arcu sem molestie ex, eget tincidunt quam magna eu augue. In hac habitasse platea dictumst. Nulla tincidunt lectus at tortor auctor, sit amet posuere dui faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas rhoncus semper eros, ut suscipit justo pellentesque at. Ut vehicula, sem vitae facilisis finibus, tellus dolor posuere tellus, condimentum pharetra orci arcu eget enim. Etiam iaculis a diam eget aliquam. Quisque dolor odio, varius eget auctor eget, suscipit eu libero. Vestibulum quis massa pulvinar, malesuada nulla sit amet, consectetur libero. Aliquam vel augue felis. Curabitur tincidunt nec ex ut porttitor. Curabitur pharetra vulputate velit, eu auctor lectus faucibus id. Maecenas ac congue odio, non condimentum nisi.
                    Suspendisse fermentum tincidunt lobortis. In ultricies venenatis nisl sit amet suscipit. Maecenas pellentesque in dolor a fermentum. Phasellus ac erat vitae orci tincidunt varius. Sed tristique mi blandit, venenatis justo in, lobortis magna. Suspendisse consequat dolor lacus, ac semper libero consectetur in. Ut elementum euismod quam, et luctus felis lobortis in.
                    Mauris nec pretium elit. Curabitur elementum, diam sit amet fermentum vestibulum, tortor enim tristique massa, non posuere ligula nisi nec enim. Cras ut arcu at nulla dapibus sollicitudin. Nulla elementum varius risus, eu aliquet leo tempor ac. Donec sollicitudin suscipit lacus fringilla pretium. Nam leo velit, iaculis eu bibendum tincidunt, sagittis facilisis odio. Duis nec nibh non tortor venenatis consequat sit amet non ex. Nullam iaculis tellus at ornare tempus. Sed eu enim bibendum, posuere erat sed, semper risus. Maecenas placerat, est id rutrum pulvinar, mi metus lacinia eros, sit amet sodales ex eros eu nunc. Phasellus quis vulputate elit. Sed ut fermentum mauris. ...</p>
                <p>*Final del contenido ...*</p>
            </div>
            <button onClick={irAbajo}>Ir al final</button>
        </div >
    );
}
