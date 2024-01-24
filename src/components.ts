import { calendar } from "./consts";
import { Editor } from "grapesjs";
import { PluginOptions } from '.'

export default (editor: Editor, opts: PluginOptions) => {
    const domc = editor.DomComponents;
    domc.addType(calendar.type, {
        isComponent: (el) => {
            if (el.classList && el.classList.contains("fcCalendar")) {
                console.log(el.classList)
                return { type: calendar.type };
            }
        },
        model: {
            defaults: {
                type: calendar.type,
                name: calendar.name,
                droppable: false,
                attributes: {
                    "style": "min-width:10%;min-height:30px;",
                    "data-gjs-editable": "false",
                    "class": "fcCalendar",
                },
                script: function () {
                    // console.log(this.id)
                    const el = this;
                    try {
                        //@ts-ignore
                        let calendar = new FullCalendar.Calendar(el, {
                            initialView: 'dayGridMonth'
                        });
                        calendar.render()
                    } catch (error) {
                        console.log(error)
                    }
                },
                init(){
                    console.log("init calendar")
                }
            }
        }
    })
}