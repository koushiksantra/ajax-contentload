<!--
<pre>
    <?php
//    print_r($_POST);
    //echo json_encode($_POST);
    ?>

</pre>

<ul id="one" class="level-1">
    <li class="item-i">I</li>
    <li id="ii" class="item-ii">II
        <ul class="level-2">
            <li class="item-a">A</li>
            <li class="item-b">B
                <ul class="level-3">
                    <li class="item-1">1</li>
                    <li class="item-2">2</li>
                    <li class="item-3">3</li>
                </ul>
            </li>
            <li class="item-c">C</li>
        </ul>
    </li>
    <li class="item-iii">III</li>
</ul>-->

<div id="containers">

    <div id='destinations' >
                <form method="post"  action="temp.php">
                    <input type="text" value="Ruma" name="fname">
                    <input type="checkbox" name="present" value="2" checked="checked">
                    <select name='time'>
                        <option >day</option>
                        <option selected="selected">Night</option>
                    </select>
                    <input type="radio" name="zender" value="female" checked="checked">
                    <textarea name="desc">Hi I am Tutai santra</textarea>
                    <input type='submit' name='submit'>
                </form>
            </div>

        </div>