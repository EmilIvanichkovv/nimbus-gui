{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-23.11";
  };

  outputs = inputs @ {
    nixpkgs,
    flake-parts,
    ...
  }:
    flake-parts.lib.mkFlake {inherit inputs;} {
      systems = ["x86_64-linux"];
      perSystem = {pkgs, ...}: {
        devShells.default = with pkgs;
          mkShell {
            packages = [
              nodejs
              yarn-berry
              python3

              figlet
            ];
            shellHook = ''
              export PATH="$PWD/node_modules/.bin:$PATH"
              if [ "''${DISABLE_DEVSHELL_BANNER:-}" != true ]; then
                figlet "Welcome to Nimbus-GUI"
              fi
            '';
          };
      };
    };
}
