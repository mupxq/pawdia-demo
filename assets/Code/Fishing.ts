import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Fishing')
export class Fishing extends Component {
    @property(Node)
    Pop_Event_Node: Node = null;

    private eventTimer: number = 0;
    private eventTriggered: boolean = false;
    private randomEventTime: number = 0;

    start() {
        // Get the Pop_Event node if not set in inspector
        if (!this.Pop_Event_Node) {
            this.Pop_Event_Node = this.node.getChildByName('Pop_Event'); 
        }

        // Generate random time between 15-30 seconds
        this.randomEventTime = 15 + Math.random() * 15;
        console.log(`Random event will trigger after ${this.randomEventTime.toFixed(2)} seconds`);
    }

    update(deltaTime: number) {
        // Only run timer if event hasn't been triggered yet
        if (!this.eventTriggered) {
            this.eventTimer += deltaTime;

            // Check if it's time to show the event
            if (this.eventTimer >= this.randomEventTime) {
                this.triggerRandomEvent();
            }
        }
    }

    private triggerRandomEvent() {
        if (!this.eventTriggered) {
            this.eventTriggered = true;

            // Show the Pop_Event node
            if (this.Pop_Event_Node) {
                this.Pop_Event_Node.active = true;
                console.log('Random event triggered! Pop_Event is now visible.');
            } else {
                console.warn('Pop_Event node not found!');
            }
        }
    }
}

