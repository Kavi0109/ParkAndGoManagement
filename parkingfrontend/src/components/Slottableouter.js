import React from 'react';
import logo from './parking.jpg';
import logo2 from './parks.jpg';

function tableouter(){

    const tablestyle = {
        width:'auto',
        height:'auto',
        border:'1px solid black',
        padding:'100px'
    };

    const tablerow ={
        width:'auto',
        height:'auto',
        border:'1px solid black',
    }

    const textedit={
        size:'25%',
        style:'bold',
        color:'black'
    }

    const logosize={
        width:'75px',
        height:'75px'
    }

    const heading ={
        fontSize:'200%',
        color:'black'

    }


    return(
        <div className="container ">
            <center>
            <h1 style={{marginTop:50}}>Welcome to Outer Parking Area!!</h1>
            
            </center>
        <center>
        <p style={textedit}>All Parking Slots
        <img src={logo}  style={logosize} alt="Logo"></img>Available
        <img src={logo2}  style={logosize} alt="Logo"></img>Occupied
        </p>
        <p style={textedit}><u><b>Click a slot to assign it to a vehicle</b></u></p>
        <table>
            <tr style={tablestyle}>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>001</center></p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>002</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>003</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>004</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>005</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>006</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>007</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>008</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>009</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>010</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>011</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>012</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>013</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>014</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>015</center>  </p></td>

            </tr>
            <tr style={tablestyle}>    
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>016</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>017</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>018</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>019</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>020</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>021</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>022</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>023</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>024</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>025</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>026</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>027</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>028</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>029</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>030</center>  </p></td> 
  
            </tr>
            <tr style={tablestyle}>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>031</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>032</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>033</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>034</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>035</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>036</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>037</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>038</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>039</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>040</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>041</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>042</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>043</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>044</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>045</center>  </p></td> 

            </tr>
            <tr style={tablestyle}>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>046</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>047</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>048</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>049</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>050</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>051</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>052</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>053</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>054</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>055</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>056</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>057</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>058</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>059</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>060</center>  </p></td>

            </tr>
            <tr style={tablestyle}>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>061</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>062</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>063</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>064</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>065</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>066</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>067</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>068</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>069</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>070</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>071</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>072</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>073</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>074</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>075</center>  </p></td> 

            </tr>
            <tr style={tablestyle}>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>076</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>077</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>078</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>079</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>080</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>081</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>082</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>083</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>084</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>085</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>086</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>087</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>088</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>089</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>090</center>  </p></td>

            </tr>
            <tr style={tablestyle}>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>091</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>092</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>093</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>094</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>095</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>096</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>097</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>098</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>099</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>100</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>101</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>102</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>103</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>104</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>105</center>  </p></td>

            </tr>
            <tr style={tablestyle}>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>106</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>107</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>108</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>109</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>110</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>111</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>112</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>113</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>114</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>115</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>116</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>117</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>118</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>119</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>120</center>  </p></td>

            </tr>
            <tr style={tablestyle}>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>121</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>122</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>123</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>124</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>125</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>126</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>127</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>128</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>129</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>130</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>131</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>132</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>133</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>134</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>135</center>  </p></td>
            </tr>
            <tr style={tablestyle}>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>136</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>137</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>138</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>139</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>140</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>141</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>142</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>143</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>144</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>145</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>146</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>147</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>148</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>149</center>  </p></td>
                <td style={tablerow}><a href="/add"><img src={logo}  style={logosize} alt="Logo"></img></a><p><center>150</center>  </p></td>

            </tr>
        </table>
    
    </center>
        </div>
    )
}

export default tableouter;