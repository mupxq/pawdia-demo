import { _decorator, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Start')
export class Start extends Component {
    start() {

    }

    Game_Start_Button_click() {
       director.loadScene('C_Home');
    }

    update(deltaTime: number) {
        
    }
}

