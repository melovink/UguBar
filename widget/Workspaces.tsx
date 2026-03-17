import Hyprland from "gi://AstalHyprland";
import Gtk from "gi://Gtk?version=4.0";

const hyprland = Hyprland.get_default();

export default function Workspaces() {
    return (
        <box orientation={1}>
            {hyprland.workspaces.map((ws: any) => (
                <button onClicked={() => hyprland.dispatch("workspace", `${ws.id}`)}>
                    <label label={`${ws.id}`} />
                </button>
            ))}
        </box>
    );
}