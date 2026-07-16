# lexical_analyzer.py

import re

TOKEN_SPECIFICATION = [
    ("NUMBER",      r"\d+(\.\d+)?"),
    ("STRING",      r'"[^"\n]*"'),
    ("ID",          r"[A-Za-z_][A-Za-z0-9_]*"),
    ("OP",          r"==|!=|<=|>=|[+\-*/=<>]"),
    ("SEPARATOR",   r"[(),;{}]"),
    ("NEWLINE",     r"\n"),
    ("SKIP",        r"[ \t]+"),
    ("MISMATCH",    r"."),
]

KEYWORDS = {
    "if", "else", "while", "for", "return", "int", "float", "string", "print"
}

token_regex = "|".join(f"(?P<{name}>{pattern})" for name, pattern in TOKEN_SPECIFICATION)

def lexical_analyzer(code):
    tokens = []
    line_num = 1
    line_start = 0

    for mo in re.finditer(token_regex, code):
        kind = mo.lastgroup
        value = mo.group()

        if kind == "NUMBER":
            tokens.append(("NUMBER", value))
        elif kind == "STRING":
            tokens.append(("STRING", value))
        elif kind == "ID":
            if value in KEYWORDS:
                tokens.append(("KEYWORD", value))
            else:
                tokens.append(("IDENTIFIER", value))
        elif kind == "OP":
            tokens.append(("OPERATOR", value))
        elif kind == "SEPARATOR":
            tokens.append(("SEPARATOR", value))
        elif kind == "NEWLINE":
            line_num += 1
            line_start = mo.end()
        elif kind == "SKIP":
            continue
        elif kind == "MISMATCH":
            raise SyntaxError(f"Unexpected character {value!r} on line {line_num}")

    return tokens

if __name__ == "__main__":
    sample_code = '''
    int x = 10;
    float y = 20.5;
    if (x < y) {
        print("x is less than y");
    }
    '''

    result = lexical_analyzer(sample_code)
    for token in result:
        print(token)
