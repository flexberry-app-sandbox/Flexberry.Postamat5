﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Postamat5
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Логистика.
    /// </summary>
    // *** Start programmer edit section *** (Логистика CustomAttributes)

    // *** End programmer edit section *** (Логистика CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЛогистикаE", new string[] {
            "Номер as \'Номер\'",
            "Состояние as \'Состояние\'",
            "Информация as \'Информация\'"})]
    [View("ЛогистикаL", new string[] {
            "Номер as \'Номер\'",
            "Состояние as \'Состояние\'",
            "Информация as \'Информация\'"})]
    public class Логистика : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомер;
        
        private IIS.Postamat5.Состояние fСостояние;
        
        private string fИнформация;
        
        // *** Start programmer edit section *** (Логистика CustomMembers)

        // *** End programmer edit section *** (Логистика CustomMembers)

        
        /// <summary>
        /// Информация.
        /// </summary>
        // *** Start programmer edit section *** (Логистика.Информация CustomAttributes)

        // *** End programmer edit section *** (Логистика.Информация CustomAttributes)
        [StrLen(255)]
        public virtual string Информация
        {
            get
            {
                // *** Start programmer edit section *** (Логистика.Информация Get start)

                // *** End programmer edit section *** (Логистика.Информация Get start)
                string result = this.fИнформация;
                // *** Start programmer edit section *** (Логистика.Информация Get end)

                // *** End programmer edit section *** (Логистика.Информация Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Логистика.Информация Set start)

                // *** End programmer edit section *** (Логистика.Информация Set start)
                this.fИнформация = value;
                // *** Start programmer edit section *** (Логистика.Информация Set end)

                // *** End programmer edit section *** (Логистика.Информация Set end)
            }
        }
        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (Логистика.Номер CustomAttributes)

        // *** End programmer edit section *** (Логистика.Номер CustomAttributes)
        public virtual int Номер
        {
            get
            {
                // *** Start programmer edit section *** (Логистика.Номер Get start)

                // *** End programmer edit section *** (Логистика.Номер Get start)
                int result = this.fНомер;
                // *** Start programmer edit section *** (Логистика.Номер Get end)

                // *** End programmer edit section *** (Логистика.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Логистика.Номер Set start)

                // *** End programmer edit section *** (Логистика.Номер Set start)
                this.fНомер = value;
                // *** Start programmer edit section *** (Логистика.Номер Set end)

                // *** End programmer edit section *** (Логистика.Номер Set end)
            }
        }
        
        /// <summary>
        /// Состояние.
        /// </summary>
        // *** Start programmer edit section *** (Логистика.Состояние CustomAttributes)

        // *** End programmer edit section *** (Логистика.Состояние CustomAttributes)
        public virtual IIS.Postamat5.Состояние Состояние
        {
            get
            {
                // *** Start programmer edit section *** (Логистика.Состояние Get start)

                // *** End programmer edit section *** (Логистика.Состояние Get start)
                IIS.Postamat5.Состояние result = this.fСостояние;
                // *** Start programmer edit section *** (Логистика.Состояние Get end)

                // *** End programmer edit section *** (Логистика.Состояние Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Логистика.Состояние Set start)

                // *** End programmer edit section *** (Логистика.Состояние Set start)
                this.fСостояние = value;
                // *** Start programmer edit section *** (Логистика.Состояние Set end)

                // *** End programmer edit section *** (Логистика.Состояние Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЛогистикаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЛогистикаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЛогистикаE", typeof(IIS.Postamat5.Логистика));
                }
            }
            
            /// <summary>
            /// "ЛогистикаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЛогистикаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЛогистикаL", typeof(IIS.Postamat5.Логистика));
                }
            }
        }
    }
}
