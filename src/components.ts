import { calendar } from "./consts";
import { Editor } from "grapesjs";
import { PluginOptions } from '.'

function serialize(f:any, env:any) {
    return JSON.stringify({ src: f.toString(), env: env });
}

export default (editor: Editor, opts: PluginOptions) => {
    const domc = editor.DomComponents;
    let functions: { [key: string]: any } = {}
    Object.keys(opts).forEach((key: string, val) => {
        // console.log(key," -> ",typeof opts[key])
        if (typeof opts[key] === "function") {
            functions[key] = serialize(opts[key], {})
        }
    })
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
                options: opts,
                functions,
                'script-props': ['options', 'functions'],
                script: function (arg: any) {
                    function parse(serialized: string) {
                        var parsed = JSON.parse(serialized);
                        return createFunction(parsed.src, parsed.env);
                    }

                    function createFunction(src: any, env: any) {
                        return (new Function(createFunctionBody(src, env))(env));
                    }

                    function createFunctionBody(src: any, env: any) {
                        return '"use strict";\n' + Object.keys(env).reduceRight(addVar, 'return ' + src + ';');
                    }

                    function addVar(s: any, k: any) {
                        return 'var ' + k + ' = arguments[0].' + k + ';\n' + s;
                    }
                    const el = this;
                    Object.keys(arg.functions).forEach((key: string, val) => {
                        arg.functions[key] = parse(arg.functions[key])
                    })
                    try {
                        let calendarOpts = {
                            initialView: 'dayGridMonth',
                        }
                        //TODO: check each option
                        Object.assign(calendarOpts, arg.options)
                        Object.assign(calendarOpts, arg.functions)
                        //@ts-ignore
                        let calendar = new FullCalendar.Calendar(el, calendarOpts);
                        calendar.render()
                    } catch (error) {
                        console.log(error)
                    }
                },
                init() {
                    console.log("init calendar")
                }
            }
        }
    })
}