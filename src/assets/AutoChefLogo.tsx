import * as React from "react";
import Svg, {
  Defs,
  LinearGradient,
  Mask,
  Path,
  Rect,
  Stop,
  SvgProps,
} from "react-native-svg";

export function AutoChefLogo(props: SvgProps) {
  return (
    <Svg width={142} height={32} fill="none" {...props}>
      <Rect width={32} height={32} x={0.684} fill="#EB3F12" rx={7.719} />
      <Rect
        width={32}
        height={32}
        x={0.684}
        fill="url(#a)"
        opacity={0.02}
        rx={7.719}
      />
      <Rect
        width={27.509}
        height={27.509}
        x={2.93}
        y={2.246}
        stroke="#AA2214"
        strokeWidth={0.281}
        rx={6.175}
      />
      <Mask
        id="b"
        width={21}
        height={20}
        x={6.14}
        y={5.596}
        fill="#000"
        maskUnits="userSpaceOnUse"
      >
        <Path fill="#fff" d="M6.14 5.596h21v20h-21z" />
        <Path
          fillRule="evenodd"
          d="M10.366 8.623a6.906 6.906 0 0 1 4.886-2.026h3.005c1.832 0 3.59.728 4.886 2.026a6.92 6.92 0 0 1 2.024 4.89v.624a2.406 2.406 0 0 1 0 4.167v1.826a3.31 3.31 0 0 1-1.606 2.838v.12a2.175 2.175 0 0 1-4.322.35H14.27a2.176 2.176 0 0 1-4.323-.35v-.12a3.31 3.31 0 0 1-1.605-2.837v-1.827a2.405 2.405 0 0 1-.88-3.286c.211-.366.515-.67.88-.881v-.623a6.92 6.92 0 0 1 2.024-4.891Zm-.216 5.116a5.458 5.458 0 0 1 5.458-5.458h2.293a5.458 5.458 0 0 1 5.458 5.458v.436H10.15v-.436Zm10.716 5.672a.28.28 0 0 1-.504 0l-.498-1.025h-9.776v1.02a2.348 2.348 0 0 0 2.348 2.348h8.497a2.348 2.348 0 0 0 2.348-2.348v-1.02h-1.916l-.498 1.025Z"
          clipRule="evenodd"
        />
      </Mask>
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M10.366 8.623a6.906 6.906 0 0 1 4.886-2.026h3.005c1.832 0 3.59.728 4.886 2.026a6.92 6.92 0 0 1 2.024 4.89v.624a2.406 2.406 0 0 1 0 4.167v1.826a3.31 3.31 0 0 1-1.606 2.838v.12a2.175 2.175 0 0 1-4.322.35H14.27a2.176 2.176 0 0 1-4.323-.35v-.12a3.31 3.31 0 0 1-1.605-2.837v-1.827a2.405 2.405 0 0 1-.88-3.286c.211-.366.515-.67.88-.881v-.623a6.92 6.92 0 0 1 2.024-4.891Zm-.216 5.116a5.458 5.458 0 0 1 5.458-5.458h2.293a5.458 5.458 0 0 1 5.458 5.458v.436H10.15v-.436Zm10.716 5.672a.28.28 0 0 1-.504 0l-.498-1.025h-9.776v1.02a2.348 2.348 0 0 0 2.348 2.348h8.497a2.348 2.348 0 0 0 2.348-2.348v-1.02h-1.916l-.498 1.025Z"
        clipRule="evenodd"
      />
      <Path
        fill="#AA2214"
        d="m10.366 8.623.199.198-.199-.198Zm12.777 0 .198-.199-.198.199Zm2.024 5.514h-.28v.162l.14.081.14-.243Zm.88.88-.244.14.244-.14Zm0 2.407.243.14-.243-.14Zm-.88.88-.14-.243-.14.081v.162h.28Zm-.968 4.166.198.198-.198-.198Zm-.638.498-.144-.241-.136.082v.159h.28Zm-4.322.47.277-.044-.038-.236h-.24v.28Zm-4.969 0v-.28h-.239l-.038.236.277.045Zm-4.323-.47h.281v-.16l-.136-.081-.145.24Zm-.637-.498-.199.198.199-.198Zm-.968-4.166h.28v-.162l-.14-.08-.14.242Zm-.88-.88-.243.14.243-.14Zm0-2.406.244.14-.244-.14Zm.88-.881.14.243.14-.081v-.162h-.28Zm15.017.038v.281h.28v-.28h-.28Zm-13.209 0h-.28v.281h.28v-.28Zm10.212 5.236-.253.122.253-.122Zm.505 0-.253-.123.252.123Zm-1.004-1.025.253-.123-.077-.158h-.176v.281Zm-9.775 0v-.28h-.28v.28h.28Zm10.845 3.368v-.28.28Zm2.348-3.368h.28v-.28h-.28v.28Zm-1.916 0v-.28h-.176l-.077.157.253.123Zm-6.113-12.07a7.187 7.187 0 0 0-5.085 2.108l.398.397a6.626 6.626 0 0 1 4.687-1.944v-.561Zm3.005 0h-3.005v.561h3.005v-.561Zm5.084 2.108a7.187 7.187 0 0 0-5.084-2.108v.561c1.758 0 3.444.7 4.687 1.944l.397-.397Zm2.107 5.09c0-1.91-.758-3.74-2.107-5.09l-.397.397a6.64 6.64 0 0 1 1.942 4.693h.562Zm0 .623v-.623h-.562v.623h.562Zm.842.74a2.686 2.686 0 0 0-.983-.983l-.28.486c.322.186.59.455.776.778l.487-.28Zm.36 1.344c0-.472-.125-.935-.36-1.344l-.487.28c.187.324.285.69.285 1.064h.561Zm-.36 1.343c.235-.409.36-.872.36-1.343h-.562c0 .373-.098.74-.285 1.062l.487.28Zm-.983.983c.408-.236.747-.575.983-.983l-.487-.28a2.123 2.123 0 0 1-.777.777l.281.486Zm.14 1.583v-1.826h-.56v1.826h.56Zm-1.05 2.538a3.59 3.59 0 0 0 1.05-2.538h-.56c0 .803-.32 1.573-.887 2.141l.397.397Zm-.691.54c.25-.15.482-.33.691-.54L24 22.271a3.02 3.02 0 0 1-.583.456l.289.481Zm.136-.12v-.12h-.561v.12h.561Zm-2.456 2.456c1.357 0 2.456-1.1 2.456-2.456h-.561a1.895 1.895 0 0 1-1.895 1.895v.56Zm-2.424-2.06a2.457 2.457 0 0 0 2.424 2.06v-.561a1.895 1.895 0 0 1-1.87-1.59l-.554.09Zm-4.692.235h4.969v-.561H14.27v.561Zm-2.147 1.825a2.457 2.457 0 0 0 2.424-2.06l-.554-.09a1.895 1.895 0 0 1-1.87 1.589v.56Zm-2.456-2.456c0 1.356 1.1 2.456 2.456 2.456v-.561a1.895 1.895 0 0 1-1.895-1.895h-.561Zm0-.12v.12h.561v-.12h-.561Zm-.556-.3c.21.21.442.39.692.54l.289-.481a3.022 3.022 0 0 1-.583-.456l-.398.397Zm-1.05-2.538a3.59 3.59 0 0 0 1.05 2.538l.398-.397a3.03 3.03 0 0 1-.886-2.14H8.06Zm0-1.826v1.826h.562v-1.826H8.06Zm-.842-.74c.236.408.575.747.983.983l.28-.486a2.124 2.124 0 0 1-.776-.778l-.487.28Zm-.36-1.343c0 .471.125.934.36 1.343l.487-.28a2.127 2.127 0 0 1-.285-1.063H6.86Zm.36-1.344c-.235.409-.36.872-.36 1.344h.562c0-.373.098-.74.285-1.063l-.487-.28Zm.983-.983a2.686 2.686 0 0 0-.983.983l.487.28c.186-.322.454-.59.777-.777l-.281-.486Zm-.14-.38v.623h.56v-.623h-.56Zm2.105-5.09a7.202 7.202 0 0 0-2.106 5.09h.562a6.64 6.64 0 0 1 1.942-4.693l-.398-.397ZM15.608 8a5.739 5.739 0 0 0-5.739 5.739h.562a5.177 5.177 0 0 1 5.177-5.178V8Zm2.293 0h-2.293v.561h2.293V8Zm5.738 5.739C23.64 10.569 21.07 8 17.901 8v.561a5.177 5.177 0 0 1 5.177 5.178h.561Zm0 .436v-.436h-.561v.436h.561Zm-13.489.281H23.36v-.561H10.15v.561Zm-.28-.717v.436h.56v-.436h-.56Zm10.24 5.794a.561.561 0 0 0 1.009 0l-.505-.245-.505.245Zm-.499-1.024.498 1.024.505-.245-.498-1.025-.505.246Zm-9.523.158h9.775v-.562h-9.775v.562Zm.28.74v-1.021h-.561v1.02h.561Zm2.068 2.067a2.067 2.067 0 0 1-2.068-2.067h-.561a2.629 2.629 0 0 0 2.629 2.628v-.561Zm8.497 0h-8.497v.561h8.497v-.561ZM23 19.407a2.067 2.067 0 0 1-2.067 2.067v.561a2.629 2.629 0 0 0 2.628-2.628H23Zm0-1.021v1.02h.561v-1.02H23Zm-1.635.28h1.916v-.56h-1.916v.56Zm-.246.867.498-1.024-.505-.246-.498 1.025.505.245Z"
        mask="url(#b)"
      />
      <Rect
        width={32}
        height={32}
        x={0.684}
        fill="url(#c)"
        opacity={0.2}
        rx={7.719}
      />
      <Path
        fill="#FAFAFA"
        d="M47.948 20.858h-5.582L41.47 23.5h-3.814l5.412-14.958h4.219L52.7 23.5h-3.857l-.895-2.642Zm-.937-2.813-1.854-5.476-1.832 5.476h3.686Zm19.077-6.435V23.5h-3.644v-1.62c-.37.526-.874.952-1.513 1.28-.625.312-1.32.468-2.088.468-.91 0-1.712-.199-2.408-.597-.696-.412-1.236-1.001-1.62-1.768-.383-.767-.574-1.67-.574-2.706V11.61h3.622v6.457c0 .795.206 1.413.618 1.853.412.44.966.66 1.662.66.71 0 1.271-.22 1.683-.66.412-.44.618-1.058.618-1.853V11.61h3.644Zm9.243 8.8v3.09h-1.853c-1.322 0-2.351-.32-3.09-.959-.739-.653-1.108-1.712-1.108-3.175v-4.73h-1.449V11.61h1.449V8.713h3.644v2.897h2.386v3.026h-2.386v4.773c0 .355.085.61.255.767.17.156.455.234.853.234h1.3Zm7.442 3.26c-1.165 0-2.216-.248-3.153-.745a5.551 5.551 0 0 1-2.195-2.131c-.526-.923-.789-2.003-.789-3.239 0-1.221.27-2.294.81-3.217a5.475 5.475 0 0 1 2.216-2.152c.938-.498 1.989-.746 3.154-.746 1.164 0 2.216.248 3.153.746a5.475 5.475 0 0 1 2.216 2.152c.54.923.81 1.996.81 3.217 0 1.222-.277 2.301-.831 3.239a5.48 5.48 0 0 1-2.237 2.13c-.938.498-1.99.747-3.154.747Zm0-3.153a2.34 2.34 0 0 0 1.769-.767c.497-.512.745-1.243.745-2.195 0-.951-.241-1.683-.724-2.194a2.274 2.274 0 0 0-1.747-.768c-.71 0-1.3.256-1.769.768-.469.497-.703 1.228-.703 2.194 0 .952.227 1.683.682 2.195a2.273 2.273 0 0 0 1.747.767ZM90.31 16c0-1.478.32-2.791.959-3.942a6.782 6.782 0 0 1 2.663-2.706c1.15-.654 2.45-.98 3.9-.98 1.775 0 3.295.468 4.559 1.406 1.264.938 2.11 2.216 2.536 3.835h-4.006c-.298-.625-.724-1.1-1.279-1.427-.54-.327-1.157-.49-1.853-.49-1.122 0-2.032.39-2.728 1.172-.696.78-1.044 1.825-1.044 3.132 0 1.307.348 2.35 1.044 3.132.696.781 1.606 1.172 2.728 1.172.696 0 1.314-.163 1.853-.49.555-.327.981-.803 1.279-1.428h4.006c-.426 1.62-1.272 2.898-2.536 3.835-1.264.924-2.784 1.386-4.56 1.386-1.449 0-2.748-.32-3.899-.96a6.966 6.966 0 0 1-2.663-2.705c-.64-1.151-.96-2.465-.96-3.942Zm24.157-4.517c1.363 0 2.457.454 3.281 1.363.824.895 1.236 2.131 1.236 3.708V23.5h-3.623v-6.456c0-.796-.205-1.414-.617-1.854-.412-.44-.966-.66-1.662-.66s-1.25.22-1.662.66c-.412.44-.618 1.058-.618 1.854V23.5h-3.644V7.732h3.644v5.477c.369-.526.873-.945 1.513-1.258.639-.312 1.356-.468 2.152-.468Zm18.256 5.88c0 .341-.021.697-.063 1.066h-8.246c.056.739.291 1.307.703 1.704.426.384.944.576 1.555.576.909 0 1.541-.384 1.896-1.15h3.878a5.248 5.248 0 0 1-1.086 2.109 5.298 5.298 0 0 1-1.939 1.47c-.781.355-1.655.532-2.621.532-1.165 0-2.202-.248-3.111-.745a5.31 5.31 0 0 1-2.131-2.131c-.511-.923-.767-2.003-.767-3.239 0-1.236.249-2.315.746-3.239a5.303 5.303 0 0 1 2.131-2.13c.909-.498 1.953-.746 3.132-.746 1.151 0 2.173.241 3.068.724a5.13 5.13 0 0 1 2.088 2.067c.512.895.767 1.94.767 3.132Zm-3.728-.958c0-.625-.213-1.123-.64-1.492-.426-.37-.958-.554-1.598-.554-.61 0-1.129.178-1.555.533-.412.355-.668.86-.767 1.513h4.56Zm11.617-1.769h-1.961V23.5h-3.643v-8.864h-1.321V11.61h1.321v-.34c0-1.464.419-2.572 1.257-3.324.838-.768 2.067-1.151 3.686-1.151.27 0 .469.007.597.021v3.09c-.696-.043-1.186.057-1.47.298-.285.242-.427.675-.427 1.3v.106h1.961v3.026Z"
      />
      <Defs>
        <LinearGradient
          id="a"
          x1={16.684}
          x2={16.684}
          y1={0}
          y2={32}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="c"
          x1={16.684}
          x2={16.684}
          y1={0}
          y2={32}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFC092" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
