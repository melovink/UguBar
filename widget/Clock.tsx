import { createPoll } from "ags/time";
import { Astal, Gtk, Gdk } from "ags/gtk4";
import { execAsync } from "ags/process";

export default function Clock(){
    const hour = createPoll("", 60000, `date "+%H"`);
    const minute = createPoll("", 10000, `date "+%M"`);

    return(
        <box orientation={1} class="clock">
            <menubutton>
                <box orientation={1} class="calendar">
                    <label class="clock-hour" label={hour} />
                    <label class="clock-minute" label={minute} />
                </box>
                
                <popover>
                    <Gtk.Calendar />
                </popover>
            </menubutton>
            
        </box>
    );
}