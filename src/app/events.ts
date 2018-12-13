import EventEmitter from 'event-emitter';
import { UserListener } from 'app/listeners';

const event = EventEmitter();

event.on('new:user', UserListener.register);

export default event;