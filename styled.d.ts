import "styled-components";
import { MainTheme, Theme } from "@typeDefs/themes";

declare module "styled-components" {
  export interface DefaultTheme extends Theme, MainTheme {}
}
