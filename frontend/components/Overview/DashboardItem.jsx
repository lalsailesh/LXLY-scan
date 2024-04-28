const DashboardItem = ({ title, value, renderIcon, borderStyle, padding }) => {

  return (
    <div
      className={`flex items-center justify-between ${borderStyle} ${padding}`}>
      <div>
        <p className='text-xs text-[#737373]'>{title}</p>
        <p className='text-white text-xl font-medium'>{value}</p>
      </div>
      {renderIcon()}
    </div>
  );
};

export default DashboardItem;
