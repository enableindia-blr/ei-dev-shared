export type ActionDescriptor = {
    nvda: string;
    jaws: string;
    narrator: string;
    voiceover: string;
    orca: string;
};
export declare const actionKeyMap: {
    readonly navigate_desktop: {
        readonly nvda: "Ctrl + Windows + D";
        readonly jaws: "Insert + F3";
        readonly narrator: "Windows + D";
        readonly voiceover: "Ctrl + Option + D";
        readonly orca: "Super + D";
    };
    readonly open_start_menu: {
        readonly nvda: "Ctrl + Escape";
        readonly jaws: "Ctrl + Escape";
        readonly narrator: "Windows";
        readonly voiceover: "Command + Space";
        readonly orca: "Super";
    };
    readonly switch_apps: {
        readonly nvda: "Alt + Tab";
        readonly jaws: "Alt + Tab";
        readonly narrator: "Alt + Tab";
        readonly voiceover: "Alt + Tab";
        readonly orca: "Alt + Tab";
    };
    readonly read_next_item: {
        readonly nvda: "ArrowDown";
        readonly jaws: "ArrowDown";
        readonly narrator: "Caps Lock + ArrowDown";
        readonly voiceover: "Ctrl + Option + ArrowRight";
        readonly orca: "ArrowDown";
    };
    readonly read_previous_item: {
        readonly nvda: "ArrowUp";
        readonly jaws: "ArrowUp";
        readonly narrator: "Caps Lock + ArrowUp";
        readonly voiceover: "Ctrl + Option + ArrowLeft";
        readonly orca: "ArrowUp";
    };
    readonly open_context_menu: {
        readonly nvda: "Shift + F10";
        readonly jaws: "Shift + F10";
        readonly narrator: "Shift + F10";
        readonly voiceover: "Ctrl + Option + Shift + M";
        readonly orca: "Shift + F10";
    };
    readonly copy: {
        readonly nvda: "Ctrl + C";
        readonly jaws: "Ctrl + C";
        readonly narrator: "Ctrl + C";
        readonly voiceover: "Command + C";
        readonly orca: "Ctrl + C";
    };
    readonly paste: {
        readonly nvda: "Ctrl + V";
        readonly jaws: "Ctrl + V";
        readonly narrator: "Ctrl + V";
        readonly voiceover: "Command + V";
        readonly orca: "Ctrl + V";
    };
    readonly select_all: {
        readonly nvda: "Ctrl + A";
        readonly jaws: "Ctrl + A";
        readonly narrator: "Ctrl + A";
        readonly voiceover: "Command + A";
        readonly orca: "Ctrl + A";
    };
    readonly find: {
        readonly nvda: "Ctrl + F";
        readonly jaws: "Ctrl + F";
        readonly narrator: "Ctrl + F";
        readonly voiceover: "Command + F";
        readonly orca: "Ctrl + F";
    };
    readonly start_reading: {
        readonly nvda: "Insert + ArrowDown";
        readonly jaws: "Insert + ArrowDown";
        readonly narrator: "Caps Lock + M";
        readonly voiceover: "Ctrl + Option + A";
        readonly orca: "Insert + ArrowDown";
    };
    readonly stop_reading: {
        readonly nvda: "Ctrl";
        readonly jaws: "Ctrl";
        readonly narrator: "Ctrl";
        readonly voiceover: "Ctrl";
        readonly orca: "Ctrl";
    };
    readonly toggle_screen_reader: {
        readonly nvda: "Ctrl + Alt + N";
        readonly jaws: "Insert + J";
        readonly narrator: "Ctrl + Windows + Enter";
        readonly voiceover: "Command + F5";
        readonly orca: "Insert + S";
    };
    readonly minimize_all_apps: {
        readonly nvda: "Windows + M";
        readonly jaws: "Windows + M";
        readonly narrator: "Windows + M";
        readonly voiceover: "Command + Option + M";
        readonly orca: "Super + H";
    };
    readonly count_items: {
        readonly nvda: "Ctrl + A";
        readonly jaws: "Ctrl + A";
        readonly narrator: "Ctrl + A";
        readonly voiceover: "Command + A";
        readonly orca: "Ctrl + A";
    };
    readonly open_file_explorer: {
        readonly nvda: "Windows + E";
        readonly jaws: "Windows + E";
        readonly narrator: "Windows + E";
        readonly voiceover: "Command + Option + E";
        readonly orca: "Super + E";
    };
    readonly launch_launcher: {
        readonly nvda: "Windows";
        readonly jaws: "Windows";
        readonly narrator: "Windows";
        readonly voiceover: "Command + Space";
        readonly orca: "Super";
    };
};
export declare const applicationKeyMap: {
    readonly word: {
        readonly bold_text: {
            readonly nvda: "Ctrl + B";
            readonly jaws: "Ctrl + B";
            readonly narrator: "Ctrl + B";
            readonly voiceover: "Command + B";
            readonly orca: "Ctrl + B";
        };
        readonly italicize_text: {
            readonly nvda: "Ctrl + I";
            readonly jaws: "Ctrl + I";
            readonly narrator: "Ctrl + I";
            readonly voiceover: "Command + I";
            readonly orca: "Ctrl + I";
        };
        readonly underline_text: {
            readonly nvda: "Ctrl + U";
            readonly jaws: "Ctrl + U";
            readonly narrator: "Ctrl + U";
            readonly voiceover: "Command + U";
            readonly orca: "Ctrl + U";
        };
    };
    readonly excel: {
        readonly navigate_cells_up: {
            readonly nvda: "ArrowUp";
            readonly jaws: "ArrowUp";
            readonly narrator: "ArrowUp";
            readonly voiceover: "ArrowUp";
            readonly orca: "ArrowUp";
        };
        readonly navigate_cells_down: {
            readonly nvda: "ArrowDown";
            readonly jaws: "ArrowDown";
            readonly narrator: "ArrowDown";
            readonly voiceover: "ArrowDown";
            readonly orca: "ArrowDown";
        };
        readonly navigate_cells_left: {
            readonly nvda: "ArrowLeft";
            readonly jaws: "ArrowLeft";
            readonly narrator: "ArrowLeft";
            readonly voiceover: "ArrowLeft";
            readonly orca: "ArrowLeft";
        };
        readonly navigate_cells_right: {
            readonly nvda: "ArrowRight";
            readonly jaws: "ArrowRight";
            readonly narrator: "ArrowRight";
            readonly voiceover: "ArrowRight";
            readonly orca: "ArrowRight";
        };
        readonly edit_cell: {
            readonly nvda: "F2";
            readonly jaws: "F2";
            readonly narrator: "F2";
            readonly voiceover: "Command + U";
            readonly orca: "F2";
        };
        readonly select_column: {
            readonly nvda: "Ctrl + Space";
            readonly jaws: "Ctrl + Space";
            readonly narrator: "Ctrl + Space";
            readonly voiceover: "Command + Space";
            readonly orca: "Ctrl + Space";
        };
        readonly go_to_cell: {
            readonly nvda: "Ctrl + G";
            readonly jaws: "Ctrl + G";
            readonly narrator: "Ctrl + G";
            readonly voiceover: "Command + G";
            readonly orca: "Ctrl + G";
        };
    };
    readonly browser: {
        readonly open_new_tab: {
            readonly nvda: "Ctrl + T";
            readonly jaws: "Ctrl + T";
            readonly narrator: "Ctrl + T";
            readonly voiceover: "Command + T";
            readonly orca: "Ctrl + T";
        };
        readonly close_tab: {
            readonly nvda: "Ctrl + W";
            readonly jaws: "Ctrl + W";
            readonly narrator: "Ctrl + W";
            readonly voiceover: "Command + W";
            readonly orca: "Ctrl + W";
        };
        readonly navigate_next_link: {
            readonly nvda: "Tab";
            readonly jaws: "Tab";
            readonly narrator: "Tab";
            readonly voiceover: "Tab";
            readonly orca: "Tab";
        };
    };
};
export type TypingAction = {
    type: "typing";
    text: string;
};
export type PressKeyAction = {
    type: "press_key";
    key: string;
};
export type AllowedKeysForActionMap = keyof typeof actionKeyMap;
export type AllowedKeysForApplicationMapWord = keyof typeof applicationKeyMap.word;
export type AllowedKeysForApplicationMapExcel = keyof typeof applicationKeyMap.excel;
export type AllowedKeysForApplicationMapBrowser = keyof typeof applicationKeyMap.browser;
//# sourceMappingURL=actionKeyMap.d.ts.map