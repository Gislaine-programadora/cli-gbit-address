import figlet from "figlet";
import gradient from "gradient-string";

export default function banner() {
  console.log(
    gradient.pastel.multiline(
      figlet.textSync("GBIT ADDRESS", {
        horizontalLayout: "default",
      })
    )
  );

  console.log(gradient.atlas("\nGera pares de chaves para testes locais\n"));
}