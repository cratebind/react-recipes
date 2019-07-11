// TODO: Refactor this mess
import * as React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaStackOverflow
} from "react-icons/fa";
import { VisuallyHidden } from "reakit";
import { css } from "@emotion/core";
import { usePalette, useLighten } from "reakit-system-palette/utils";
import track from "../utils/track";
import SpectrumLogo from "../icons/Spectrum";
import Anchor from "./Anchor";
import Paragraph from "./Paragraph";

const year = new Date().getFullYear();

export default function Footer() {
  const foreground = usePalette("foreground");
  const color = useLighten(foreground, 0.35);
  return (
    <footer
      css={css`
        text-align: center;
        color: ${color};
        padding: 3rem 1rem;
        a {
          color: ${color};
          &:hover {
            color: ${foreground};
          }
        }

        p {
          font-size: 0.875em;
          margin: 0;
        }
      `}
    >
      <div
        css={css`
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: min-content;
          justify-content: center;
          grid-gap: 16px;
          margin-bottom: 20px;
        `}
      >
        <Anchor
          href="https://github.com/cratebind"
          target="_blank"
          onClick={track("reakit.footerGithubClick")}
        >
          <FaGithub />
          <VisuallyHidden>GitHub</VisuallyHidden>
        </Anchor>
      </div>
      <Paragraph>
        Released under the{" "}
        <Anchor href="https://opensource.org/licenses/MIT" target="_blank">
          MIT License
        </Anchor>
      </Paragraph>
    </footer>
  );
}
