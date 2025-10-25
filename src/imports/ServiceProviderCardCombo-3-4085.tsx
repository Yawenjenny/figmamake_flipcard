import svgPaths from "./svg-4b6gdjao61";
import imgImage from "figma:asset/b7e9c5dc1a5770ce1a58d5a9e71073ae422307d8.png";
import imgFemale3 from "figma:asset/e53aa14af0400d95075a77b5f046a1280ebc3049.png";
import imgFemale2 from "figma:asset/a29418efd5e981aa8d700dbd89060308b63ff15b.png";
import imgFemale from "figma:asset/c06f13ee95a3fd50589ae81f69f6050612041a89.png";
import imgMale3 from "figma:asset/1e2121396fa2dec3600848df405b63568f1adc38.png";
import imgMale2 from "figma:asset/b6f5922ce586e23d46f49f928e32f5b262cf4344.png";
import imgMale from "figma:asset/990c6bda7661b825aba1b31b06ad2a500121f685.png";

function ServiceAccountant() {
  return (
    <div className="absolute bg-[#e7f0ff] box-border content-stretch flex items-center justify-center left-0 p-[4px] size-[48px] top-0" data-name="service - accountant">
      <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <div className="absolute bg-white inset-0 overflow-clip rounded-[16px]" data-name="Gallery">
      <ServiceAccountant />
    </div>
  );
}

function Verified() {
  return (
    <div className="absolute aspect-[24/24] bottom-[12.5%] left-1/2 overflow-clip top-[12.5%] translate-x-[-50%]" data-name="Verified">
      <div className="absolute aspect-[18.9971/18.9948] left-[10.42%] right-[10.42%] top-[calc(50%+0.001px)] translate-y-[-50%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path clipRule="evenodd" d={svgPaths.p134388b0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function SymbolVerified() {
  return (
    <div className="absolute bg-[#6cdeee] bottom-0 right-0 rounded-[12px] size-[16px]" data-name="Symbol - Verified">
      <div className="overflow-clip relative rounded-[inherit] size-[16px]">
        <Verified />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[14px]" />
    </div>
  );
}

function ServiceProviderAvatar() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 size-[48px]" data-name="Service Provider Avatar">
      <Gallery />
      <SymbolVerified />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Title">
      <p className="basis-0 font-['Urbanist:Bold',_sans-serif] font-bold grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#222020] text-[16px]">Ellen B</p>
    </div>
  );
}

function Caption() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Caption">
      <p className="basis-0 font-['Urbanist:Medium',_sans-serif] font-medium grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#33312f] text-[16px]">Lawyer</p>
    </div>
  );
}

function Title1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Title">
      <Title />
      <Caption />
    </div>
  );
}

function Name() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Name">
      <ServiceProviderAvatar />
      <Title1 />
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative w-full">
          <Name />
        </div>
      </div>
    </div>
  );
}

function ServiceProviderHeader() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Service Provider Header">
      <Content />
    </div>
  );
}

function Mobile() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Mobile">
      <p className="[text-underline-position:from-font] decoration-solid font-['Urbanist:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[#33312f] text-[16px] underline w-full">+1 479-601-7580</p>
    </div>
  );
}

function Address() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Address">
      <p className="[text-underline-position:from-font] decoration-solid font-['Urbanist:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[#33312f] text-[16px] underline w-full">Keller Williams Market Pro Realty</p>
    </div>
  );
}

function Website() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Website">
      <p className="[text-underline-position:from-font] decoration-solid font-['Urbanist:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[#33312f] text-[16px] underline w-full">www.xxx.com</p>
    </div>
  );
}

function Label() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Label">
      <p className="basis-0 font-['Urbanist:Medium',_sans-serif] font-medium grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#58514f] text-[16px]">Recommendation</p>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Title">
      <Label />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Urbanist:Medium',_sans-serif] font-medium grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#58514f] text-[16px]">{`She is really great for first-time founders, not expensive cause first-time founders don’t need a very expensive lawyer at early stage for startup incorporation. she has experience in C-Corp filings and ... `}</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Urbanist:Medium',_sans-serif] font-medium grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#222020] text-[16px] text-right">More</p>
    </div>
  );
}

function AdditionalInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Additional Info">
      <Title2 />
      <Text />
      <Text1 />
    </div>
  );
}

function Items() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Items">
      <Mobile />
      <Address />
      <Website />
      <AdditionalInfo />
    </div>
  );
}

function ServiceProviderContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Service Provider Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[24px] py-[12px] relative w-full">
          <Items />
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Body">
      <p className="font-['Urbanist:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[#58514f] text-[16px] text-nowrap whitespace-pre">Shared by</p>
    </div>
  );
}

function StarEmoji() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="star emoji">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="star emoji">
          <path clipRule="evenodd" d={svgPaths.p15ed8e00} fill="var(--fill-0, #969396)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function UserAvatarDefault() {
  return (
    <div className="absolute bg-[#ededed] box-border content-stretch flex items-center justify-center left-0 p-[4px] size-[24px] top-0" data-name="User Avatar Default">
      <StarEmoji />
    </div>
  );
}

function Gallery1() {
  return (
    <div className="absolute bg-white inset-0 rounded-[8px]" data-name="Gallery">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute aspect-[1328/1328] bottom-0 left-1/2 top-0 translate-x-[-50%]" data-name="Female 3">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFemale3} />
        </div>
        <div className="absolute aspect-[1328/1328] bottom-0 left-1/2 top-0 translate-x-[-50%]" data-name="Female 2">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFemale2} />
        </div>
        <div className="absolute aspect-[1328/1328] bottom-0 left-1/2 top-0 translate-x-[-50%]" data-name="Female">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFemale} />
        </div>
        <div className="absolute aspect-[1328/1328] bottom-0 left-1/2 top-0 translate-x-[-50%]" data-name="Male 3">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMale3} />
        </div>
        <div className="absolute aspect-[1328/1328] bottom-0 left-1/2 top-0 translate-x-[-50%]" data-name="Male 2">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMale2} />
        </div>
        <div className="absolute aspect-[1328/1328] bottom-0 left-1/2 top-0 translate-x-[-50%]" data-name="Male">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMale} />
        </div>
        <UserAvatarDefault />
      </div>
      <div aria-hidden="true" className="absolute border-0 border-[#ff6f4f] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute aspect-[24/24] bottom-[12.5%] left-1/2 overflow-clip top-[12.5%] translate-x-[-50%]" data-name="Badge">
      <div className="absolute inset-[12.5%_10.41%_14.68%_8.33%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <path clipRule="evenodd" d={svgPaths.p20a98b80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function SymbolAmbassador() {
  return (
    <div className="absolute bg-[#6cdeee] bottom-0 right-0 rounded-[12px] size-[8px]" data-name="Symbol - Ambassador">
      <div className="overflow-clip relative rounded-[inherit] size-[8px]">
        <Badge />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px] pointer-events-none rounded-[13px]" />
    </div>
  );
}

function UserAvatar() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[24px]" data-name="User Avatar">
      <div aria-hidden="true" className="absolute border-0 border-[#ff6f4f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Gallery1 />
      <SymbolAmbassador />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Title">
      <p className="font-['Urbanist:Medium',_sans-serif] font-medium leading-[24px] relative shrink-0 text-[#222020] text-[16px] text-nowrap whitespace-pre">User</p>
    </div>
  );
}

function SharedPerson() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Shared Person">
      <UserAvatar />
      <Title3 />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Content">
      <Body />
      <SharedPerson />
    </div>
  );
}

function FooterSharedBy() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer - Shared by">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[24px] py-[12px] relative w-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-0 py-[4px] relative shrink-0" data-name="Text">
      <p className="font-['Urbanist:Bold',_sans-serif] font-bold leading-[24px] relative shrink-0 text-[#ff5d22] text-[16px] text-center text-nowrap whitespace-pre">Share</p>
    </div>
  );
}

function SecondaryButton() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Secondary Button">
      <div aria-hidden="true" className="absolute border-2 border-[#ffbdac] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[48px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-0 py-[4px] relative shrink-0" data-name="Text">
      <p className="font-['Urbanist:Bold',_sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">Collect</p>
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="basis-0 bg-[#ff6f4f] grow h-[48px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Primary Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[48px] items-center justify-center p-[16px] relative w-full">
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Buttons">
      <SecondaryButton />
      <PrimaryButton />
    </div>
  );
}

function PopupBottom() {
  return (
    <div className="relative shrink-0 w-full" data-name="Popup - Bottom">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start p-[20px] relative w-full">
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default function ServiceProviderCardCombo() {
  return (
    <div className="bg-white relative rounded-[20px] size-full" data-name="Service Provider Card Combo">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ServiceProviderHeader />
        <ServiceProviderContent />
        <FooterSharedBy />
        <PopupBottom />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ffbdac] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}