{ pkgs ? import <nixpkgs> {} }:
with pkgs;
stdenv.mkDerivation {
  name = "comick-js";

  buildInputs = with pkgs; [
    dotnet-sdk
    mono
    omnisharp-roslyn
  ] ++ (with pkgs.dotnetPackages; [
    Nuget
  ]);

  shellHook = '''';
}
