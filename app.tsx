import app from "ags/gtk4/app";
import { Astal } from "ags/gtk4";
import Clock from "./widget/Clock";
import Workspaces from "./widget/Workspaces";

app.start({
  css:"./style.scss",
    main() {
        const { TOP, LEFT, BOTTOM } = Astal.WindowAnchor;

        return (
            <window
                layer={Astal.Layer.TOP}
                exclusivity={Astal.Exclusivity.EXCLUSIVE}
                visible
                anchor={TOP | LEFT | BOTTOM}
                class="bar"
            >
                <box orientation={1}>
                    <Clock />
                    <Workspaces />
                </box>
            </window>
        );
    },
});