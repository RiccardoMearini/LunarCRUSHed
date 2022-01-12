{ pkgs ? import <nixpkgs> {} }:
with pkgs;
stdenv.mkDerivation {
  name = "rip-twitch";

  buildInputs = with pkgs; [
    python39
  ] ++ (with pkgs.python39Packages; [
    pip
    virtualenv
    black
    python-lsp-server
  ]);

  shellHook = ''
    [[ ! -d "$(pwd)/.venv" ]] && virtualenv .venv
    source .venv/bin/activate
    pip install -r requirements.txt
  '';
}
