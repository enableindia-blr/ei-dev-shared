const CTRL_KEY_NAME = "Ctrl";
const WINDOWS_KEY_NAME = "Windows";
const INSERT_KEY_NAME = "Insert";
const CAPS_LOCK_KEY_NAME = "Caps Lock";
const SHIFT_KEY_NAME = "Shift";
const SUPER_KEY_NAME = "Super";
const OPTION_KEY_NAME = "Option";
const ALT_KEY_NAME = "Alt";
const COMMAND_KEY_NAME = "Command";
const ENTER_KEY_NAME = "Enter";
const ESCAPE_KEY_NAME = "Escape";
const TAB_KEY_NAME = "Tab";
const SPACE_KEY_NAME = "Space";
const ARROW_UP_KEY_NAME = "ArrowUp";
const ARROW_DOWN_KEY_NAME = "ArrowDown";
const ARROW_LEFT_KEY_NAME = "ArrowLeft";
const ARROW_RIGHT_KEY_NAME = "ArrowRight";

export type ActionDescriptor = {
  nvda: string;
  jaws: string;
  narrator: string;
  voiceover: string;
  orca: string;
};

export const actionKeyMap = {
  navigate_desktop: {
    nvda: `${CTRL_KEY_NAME} + ${WINDOWS_KEY_NAME} + D`,
    jaws: `${INSERT_KEY_NAME} + F3`,
    narrator: `${WINDOWS_KEY_NAME} + D`,
    voiceover: `${CTRL_KEY_NAME} + ${OPTION_KEY_NAME} + D`,
    orca: `${SUPER_KEY_NAME} + D`,
  },
  open_start_menu: {
    nvda: `${CTRL_KEY_NAME} + ${ESCAPE_KEY_NAME}`,
    jaws: `${CTRL_KEY_NAME} + ${ESCAPE_KEY_NAME}`,
    narrator: `${WINDOWS_KEY_NAME}`,
    voiceover: `${COMMAND_KEY_NAME} + ${SPACE_KEY_NAME}`,
    orca: `${SUPER_KEY_NAME}`,
  },
  switch_apps: {
    nvda: `${ALT_KEY_NAME} + ${TAB_KEY_NAME}`,
    jaws: `${ALT_KEY_NAME} + ${TAB_KEY_NAME}`,
    narrator: `${ALT_KEY_NAME} + ${TAB_KEY_NAME}`,
    voiceover: `${ALT_KEY_NAME} + ${TAB_KEY_NAME}`,
    orca: `${ALT_KEY_NAME} + ${TAB_KEY_NAME}`,
  },
  read_next_item: {
    nvda: `${ARROW_DOWN_KEY_NAME}`,
    jaws: `${ARROW_DOWN_KEY_NAME}`,
    narrator: `${CAPS_LOCK_KEY_NAME} + ${ARROW_DOWN_KEY_NAME}`,
    voiceover: `${CTRL_KEY_NAME} + ${OPTION_KEY_NAME} + ${ARROW_RIGHT_KEY_NAME}`,
    orca: `${ARROW_DOWN_KEY_NAME}`,
  },
  read_previous_item: {
    nvda: `${ARROW_UP_KEY_NAME}`,
    jaws: `${ARROW_UP_KEY_NAME}`,
    narrator: `${CAPS_LOCK_KEY_NAME} + ${ARROW_UP_KEY_NAME}`,
    voiceover: `${CTRL_KEY_NAME} + ${OPTION_KEY_NAME} + ${ARROW_LEFT_KEY_NAME}`,
    orca: `${ARROW_UP_KEY_NAME}`,
  },
  open_context_menu: {
    nvda: `${SHIFT_KEY_NAME} + F10`,
    jaws: `${SHIFT_KEY_NAME} + F10`,
    narrator: `${SHIFT_KEY_NAME} + F10`,
    voiceover: `${CTRL_KEY_NAME} + ${OPTION_KEY_NAME} + ${SHIFT_KEY_NAME} + M`,
    orca: `${SHIFT_KEY_NAME} + F10`,
  },
  copy: {
    nvda: `${CTRL_KEY_NAME} + C`,
    jaws: `${CTRL_KEY_NAME} + C`,
    narrator: `${CTRL_KEY_NAME} + C`,
    voiceover: `${COMMAND_KEY_NAME} + C`,
    orca: `${CTRL_KEY_NAME} + C`,
  },
  paste: {
    nvda: `${CTRL_KEY_NAME} + V`,
    jaws: `${CTRL_KEY_NAME} + V`,
    narrator: `${CTRL_KEY_NAME} + V`,
    voiceover: `${COMMAND_KEY_NAME} + V`,
    orca: `${CTRL_KEY_NAME} + V`,
  },
  select_all: {
    nvda: `${CTRL_KEY_NAME} + A`,
    jaws: `${CTRL_KEY_NAME} + A`,
    narrator: `${CTRL_KEY_NAME} + A`,
    voiceover: `${COMMAND_KEY_NAME} + A`,
    orca: `${CTRL_KEY_NAME} + A`,
  },
  find: {
    nvda: `${CTRL_KEY_NAME} + F`,
    jaws: `${CTRL_KEY_NAME} + F`,
    narrator: `${CTRL_KEY_NAME} + F`,
    voiceover: `${COMMAND_KEY_NAME} + F`,
    orca: `${CTRL_KEY_NAME} + F`,
  },
  start_reading: {
    nvda: `${INSERT_KEY_NAME} + ${ARROW_DOWN_KEY_NAME}`,
    jaws: `${INSERT_KEY_NAME} + ${ARROW_DOWN_KEY_NAME}`,
    narrator: `${CAPS_LOCK_KEY_NAME} + M`,
    voiceover: `${CTRL_KEY_NAME} + ${OPTION_KEY_NAME} + A`,
    orca: `${INSERT_KEY_NAME} + ${ARROW_DOWN_KEY_NAME}`,
  },
  stop_reading: {
    nvda: `${CTRL_KEY_NAME}`,
    jaws: `${CTRL_KEY_NAME}`,
    narrator: `${CTRL_KEY_NAME}`,
    voiceover: `${CTRL_KEY_NAME}`,
    orca: `${CTRL_KEY_NAME}`,
  },
  toggle_screen_reader: {
    nvda: `${CTRL_KEY_NAME} + ${ALT_KEY_NAME} + N`,
    jaws: `${INSERT_KEY_NAME} + J`,
    narrator: `${CTRL_KEY_NAME} + ${WINDOWS_KEY_NAME} + ${ENTER_KEY_NAME}`,
    voiceover: `${COMMAND_KEY_NAME} + F5`,
    orca: `${INSERT_KEY_NAME} + S`,
  },
  minimize_all_apps: {
    nvda: `${WINDOWS_KEY_NAME} + M`,
    jaws: `${WINDOWS_KEY_NAME} + M`,
    narrator: `${WINDOWS_KEY_NAME} + M`,
    voiceover: `${COMMAND_KEY_NAME} + ${OPTION_KEY_NAME} + M`,
    orca: `${SUPER_KEY_NAME} + H`,
  },
  count_items: {
    nvda: `${CTRL_KEY_NAME} + A`,
    jaws: `${CTRL_KEY_NAME} + A`,
    narrator: `${CTRL_KEY_NAME} + A`,
    voiceover: `${COMMAND_KEY_NAME} + A`,
    orca: `${CTRL_KEY_NAME} + A`,
  },
  open_file_explorer: {
    nvda: `${WINDOWS_KEY_NAME} + E`,
    jaws: `${WINDOWS_KEY_NAME} + E`,
    narrator: `${WINDOWS_KEY_NAME} + E`,
    voiceover: `${COMMAND_KEY_NAME} + ${OPTION_KEY_NAME} + E`,
    orca: `${SUPER_KEY_NAME} + E`,
  },
  launch_launcher: {
    nvda: `${WINDOWS_KEY_NAME}`,
    jaws: `${WINDOWS_KEY_NAME}`,
    narrator: `${WINDOWS_KEY_NAME}`,
    voiceover: `${COMMAND_KEY_NAME} + ${SPACE_KEY_NAME}`,
    orca: `${SUPER_KEY_NAME}`,
  },
} as const;

export const applicationKeyMap = {
  word: {
    bold_text: {
      nvda: `${CTRL_KEY_NAME} + B`,
      jaws: `${CTRL_KEY_NAME} + B`,
      narrator: `${CTRL_KEY_NAME} + B`,
      voiceover: `${COMMAND_KEY_NAME} + B`,
      orca: `${CTRL_KEY_NAME} + B`,
    },
    italicize_text: {
      nvda: `${CTRL_KEY_NAME} + I`,
      jaws: `${CTRL_KEY_NAME} + I`,
      narrator: `${CTRL_KEY_NAME} + I`,
      voiceover: `${COMMAND_KEY_NAME} + I`,
      orca: `${CTRL_KEY_NAME} + I`,
    },
    underline_text: {
      nvda: `${CTRL_KEY_NAME} + U`,
      jaws: `${CTRL_KEY_NAME} + U`,
      narrator: `${CTRL_KEY_NAME} + U`,
      voiceover: `${COMMAND_KEY_NAME} + U`,
      orca: `${CTRL_KEY_NAME} + U`,
    },
  },
  excel: {
    navigate_cells_up: {
      nvda: `${ARROW_UP_KEY_NAME}`,
      jaws: `${ARROW_UP_KEY_NAME}`,
      narrator: `${ARROW_UP_KEY_NAME}`,
      voiceover: `${ARROW_UP_KEY_NAME}`,
      orca: `${ARROW_UP_KEY_NAME}`,
    },
    navigate_cells_down: {
      nvda: `${ARROW_DOWN_KEY_NAME}`,
      jaws: `${ARROW_DOWN_KEY_NAME}`,
      narrator: `${ARROW_DOWN_KEY_NAME}`,
      voiceover: `${ARROW_DOWN_KEY_NAME}`,
      orca: `${ARROW_DOWN_KEY_NAME}`,
    },
    navigate_cells_left: {
      nvda: `${ARROW_LEFT_KEY_NAME}`,
      jaws: `${ARROW_LEFT_KEY_NAME}`,
      narrator: `${ARROW_LEFT_KEY_NAME}`,
      voiceover: `${ARROW_LEFT_KEY_NAME}`,
      orca: `${ARROW_LEFT_KEY_NAME}`,
    },
    navigate_cells_right: {
      nvda: `${ARROW_RIGHT_KEY_NAME}`,
      jaws: `${ARROW_RIGHT_KEY_NAME}`,
      narrator: `${ARROW_RIGHT_KEY_NAME}`,
      voiceover: `${ARROW_RIGHT_KEY_NAME}`,
      orca: `${ARROW_RIGHT_KEY_NAME}`,
    },
    edit_cell: {
      nvda: "F2",
      jaws: "F2",
      narrator: "F2",
      voiceover: `${COMMAND_KEY_NAME} + U`,
      orca: "F2",
    },
    select_column: {
      nvda: `${CTRL_KEY_NAME} + ${SPACE_KEY_NAME}`,
      jaws: `${CTRL_KEY_NAME} + ${SPACE_KEY_NAME}`,
      narrator: `${CTRL_KEY_NAME} + ${SPACE_KEY_NAME}`,
      voiceover: `${COMMAND_KEY_NAME} + ${SPACE_KEY_NAME}`,
      orca: `${CTRL_KEY_NAME} + ${SPACE_KEY_NAME}`,
    },
    go_to_cell: {
      nvda: `${CTRL_KEY_NAME} + G`,
      jaws: `${CTRL_KEY_NAME} + G`,
      narrator: `${CTRL_KEY_NAME} + G`,
      voiceover: `${COMMAND_KEY_NAME} + G`,
      orca: `${CTRL_KEY_NAME} + G`,
    },
  },
  browser: {
    open_new_tab: {
      nvda: `${CTRL_KEY_NAME} + T`,
      jaws: `${CTRL_KEY_NAME} + T`,
      narrator: `${CTRL_KEY_NAME} + T`,
      voiceover: `${COMMAND_KEY_NAME} + T`,
      orca: `${CTRL_KEY_NAME} + T`,
    },
    close_tab: {
      nvda: `${CTRL_KEY_NAME} + W`,
      jaws: `${CTRL_KEY_NAME} + W`,
      narrator: `${CTRL_KEY_NAME} + W`,
      voiceover: `${COMMAND_KEY_NAME} + W`,
      orca: `${CTRL_KEY_NAME} + W`,
    },
    navigate_next_link: {
      nvda: `${TAB_KEY_NAME}`,
      jaws: `${TAB_KEY_NAME}`,
      narrator: `${TAB_KEY_NAME}`,
      voiceover: `${TAB_KEY_NAME}`,
      orca: `${TAB_KEY_NAME}`,
    },
  },
} as const;

export type TypingAction = {
  type: "typing";
  text: string;
};

export type PressKeyAction = {
  type: "press_key";
  key: string;
};

export type AllowedKeysForActionMap = keyof typeof actionKeyMap;
export type AllowedKeysForApplicationMapWord =
  keyof typeof applicationKeyMap.word;
export type AllowedKeysForApplicationMapExcel =
  keyof typeof applicationKeyMap.excel;
export type AllowedKeysForApplicationMapBrowser =
  keyof typeof applicationKeyMap.browser;
