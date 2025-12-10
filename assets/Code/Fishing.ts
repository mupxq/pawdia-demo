import { _decorator, Component, Node, Button, Label, director, sp } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Fishing')
export class Fishing extends Component {
    @property(Node)
    Pop_Event_Node: Node = null;

    @property(Node)
    event_button: Node = null;

    @property(Node)
    Post_Card: Node = null;

    @property(Node)
    Status_Label: Node = null;

    @property(sp.Skeleton)
    Fishing_Cat: Node = null;

    private eventTimer: number = 0;
    private eventTriggered: boolean = false;
    private randomEventTime: number = 0;

    start() {
        console.log('Fishing scene started!', this.Fishing_Cat);

        // Get the Pop_Event node if not set in inspector
        if (!this.Pop_Event_Node) {
            this.Pop_Event_Node = this.node.getChildByName('Pop_Event');
        }

        // Get the event_button node if not set in inspector
        if (!this.event_button) {
            this.event_button = this.node.getChildByName('event_button');
        }

        // Get the Post_Card node if not set in inspector
        if (!this.Post_Card) {
            this.Post_Card = this.node.getChildByName('Post_Card');
        }

        // Get the Status_Label node if not set in inspector
        if (!this.Status_Label) {
            this.Status_Label = this.node.getChildByName('Status_Label');
        }

        // Initially hide Status_Label
        if (this.Status_Label) {
            this.Status_Label.active = false;
        }

        // Add click event listener to the event button
        if (this.event_button) {
            const button = this.event_button.getComponent(Button);
            if (button) {
                button.node.on(Button.EventType.CLICK, this.onEventButtonClick, this);
            }
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

    fishing_cat_animation() {
        if (this.Fishing_Cat) {

            //设置动画为 action_2 循环播放
            this.Fishing_Cat.getComponent(sp.Skeleton).setAnimation(0, 'action_2', true);
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

    onEventButtonClick() {
        console.log('Event button clicked!');

        // Hide Pop_Event_Node
        if (this.Pop_Event_Node) {
            this.Pop_Event_Node.active = false;
        }

        // Show and update Status_Label
        if (this.Status_Label) {
            this.Status_Label.active = true;
            const label = this.Status_Label.getComponent(Label);
            if (label) {
                label.string = "明信片生成中";
            }
        }

        // Schedule the Post_Card to show after 2 seconds
        this.scheduleOnce(() => {
            // Hide Status_Label
            if (this.Status_Label) {
                this.Status_Label.active = false;
            }

            // Show Post_Card node
            if (this.Post_Card) {
                this.Post_Card.active = true;
                console.log('Post card displayed!');
            }
        }, 2); // 2 seconds delay
    }

    onEndingFishingClick() {
        console.log('Ending fishing clicked! Returning to C_Home scene...');

        // Load the C_Home scene
        director.loadScene('C_Home');
    }

    onClosePostCardClick() {
        console.log('Close post card clicked! Hiding Post_Card...');

        // Hide Post_Card node
        if (this.Post_Card) {
            this.Post_Card.active = false;
        }
    }
}

