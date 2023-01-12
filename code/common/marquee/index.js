import React from "react";

function Marquee({ marquee }) {
  return (
    <div className="marquee-wrapper">
      <div className="marquee">
        <div className="marquee-group">
          {marquee.map((src) => {
            return (
              <div key={src} className="marquee-item">
                <img src={src} alt="client images" />
              </div>
            );
          })}
        </div>

        <div aria-hidden="true" className="marquee-group">
          {marquee.map((src) => {
            return (
              <div key={src} className="marquee-item">
                <img src={src} alt="client images" />
              </div>
            );
          })}
        </div>
      </div>
    </div>

    // <div className="marquee-wrapper">
    //   <div className="marquee">
    //     <div className="marquee-group">
    //       <span>1</span>
    //       <span>2</span>
    //       <span>3</span>
    //       <span>4</span>
    //       <span>5</span>
    //       <span>6</span>
    //       <span>7</span>
    //       <span>8</span>
    //       <span>9</span>
    //       <span>10</span>
    //       <span>11</span>
    //       <span>12</span>
    //       <span>13</span>
    //       <span>14</span>
    //       <span>15</span>
    //       <span>16</span>
    //       <span>17</span>
    //       <span>18</span>
    //       <span>19</span>
    //       <span>20</span>
    //       <span>21</span>
    //       <span>22</span>
    //       <span>23</span>
    //       <span>24</span>
    //       <span>25</span>
    //       <span>26</span>
    //       <span>27</span>
    //       <span>28</span>
    //       <span>29</span>
    //       <span>20</span>
    //       <span>30</span>
    //       <span>41</span>
    //       <span>42</span>
    //       <span>43</span>
    //       <span>44</span>
    //       <span>45</span>
    //       <span>46</span>
    //       <span>47</span>
    //       <span>48</span>
    //       <span>49</span>
    //       <span>50</span>
    //       <span>51</span>
    //       <span>52</span>
    //       <span>53</span>
    //       <span>54</span>
    //       <span>55</span>
    //       <span>56</span>
    //       <span>57</span>
    //       <span>58</span>
    //       <span>59</span>
    //       <span>60</span>
    //     </div>

    //     <div aria-hidden="true" className="marquee-group">
    //       <span>1</span>
    //       <span>2</span>
    //       <span>3</span>
    //       <span>4</span>
    //       <span>5</span>
    //       <span>6</span>
    //       <span>7</span>
    //       <span>8</span>
    //       <span>9</span>
    //       <span>10</span>
    //       <span>11</span>
    //       <span>12</span>
    //       <span>13</span>
    //       <span>14</span>
    //       <span>15</span>
    //       <span>16</span>
    //       <span>17</span>
    //       <span>18</span>
    //       <span>19</span>
    //       <span>20</span>
    //       <span>21</span>
    //       <span>22</span>
    //       <span>23</span>
    //       <span>24</span>
    //       <span>25</span>
    //       <span>26</span>
    //       <span>27</span>
    //       <span>28</span>
    //       <span>29</span>
    //       <span>20</span>
    //       <span>30</span>
    //       <span>41</span>
    //       <span>42</span>
    //       <span>43</span>
    //       <span>44</span>
    //       <span>45</span>
    //       <span>46</span>
    //       <span>47</span>
    //       <span>48</span>
    //       <span>49</span>
    //       <span>50</span>
    //       <span>51</span>
    //       <span>52</span>
    //       <span>53</span>
    //       <span>54</span>
    //       <span>55</span>
    //       <span>56</span>
    //       <span>57</span>
    //       <span>58</span>
    //       <span>59</span>
    //       <span>60</span>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Marquee;
