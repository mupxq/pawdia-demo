import { _decorator, Component, director, Node, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Start')
export class Start extends Component {
    @property(Node)
    Loading_Node: Node = null;

    start() {
        director.preloadScene('C_Home', (completedCount, totalCount) => {
            // 更新加载进度显示
            const percentNode = this.Loading_Node?.getChildByName('percent');
            const labelComponent = percentNode?.getComponent(Label);
            if (labelComponent) {
                labelComponent.string = `${Math.floor(completedCount / totalCount * 100)}%`;
            }
        }, () => {
            // 加载完成后，显示Loading节点
            if (this.Loading_Node) {
                this.Loading_Node.active = false;
            }
        });
    }

    Game_Start_Button_click() {
       director.loadScene('C_Home');
    }

    update() {

    }
}

