

function RoundedText({data}) {
  return (
    <div className={`text-[3vh] px-[13px] py-[3px] border-[1.5px] flex items-center gap-2 rounded-3xl text-[#f4f4f4] bg-[#3C3C3C] border-[#3C3C3C] hover:text-[#3C3C3C] ${data.hover}`}>
        {data.name}
    </div>
  )
}

export default RoundedText