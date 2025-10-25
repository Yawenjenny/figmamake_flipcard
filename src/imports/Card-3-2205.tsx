import svgPaths from "./svg-25cyhlhhap";
import { imgRectangle13 } from "./svg-cc6t5";

function MaskGroup() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Mask group">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[18px] top-[17px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "159", "--transform-inner-height": "123" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#ffbdac] blur-[15px] filter h-[123px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-18px_-17px] mask-size-[160px_190px] w-[159px]" style={{ maskImage: `url('${imgRectangle13}')` }} />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Background">
      <div className="absolute bg-[#fff4f1] h-[190px] left-0 rounded-[20px] top-0 w-[160px]" />
      <MaskGroup />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[13.638px] relative w-[19.518px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14">
              <g id="Vector">
                <path d={svgPaths.pe341a00} fill="var(--fill-0, #00DBA8)" />
                <path d={svgPaths.p15dbfc00} fill="var(--fill-0, #00DBA8)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Urbanist:Bold',_sans-serif] font-bold leading-[24px] min-w-full relative shrink-0 text-[#33312f] text-[16px] w-[min-content]">{`Curious who your network trust? `}</p>
    </div>
  );
}

function Text() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-0 py-[4px] relative shrink-0" data-name="Text">
      <p className="font-['Urbanist:Bold',_sans-serif] font-bold leading-[16px] relative shrink-0 text-[#58514f] text-[12px] text-center text-nowrap whitespace-pre">Tap to Review</p>
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-white box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[16px] py-[8px] relative rounded-[12px] shrink-0 w-[116px]" data-name="Primary Button">
      <Text />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-[13px] top-[34px] w-[133px]">
      <Frame />
      <PrimaryButton />
    </div>
  );
}

export default function Card() {
  return (
    <div className="relative rounded-[20px] size-full" data-name="card">
      <div aria-hidden="true" className="absolute border border-[#ffbdac] border-solid inset-[-1px] pointer-events-none rounded-[21px]" />
      <Background />
      <Frame1 />
    </div>
  );
}